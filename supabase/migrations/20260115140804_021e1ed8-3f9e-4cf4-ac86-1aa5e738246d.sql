-- Create enum for application status
CREATE TYPE public.application_status AS ENUM ('pending', 'approved', 'rejected', 'under_review');

-- Create enum for vendor categories
CREATE TYPE public.vendor_category AS ENUM (
  'fashion_textiles',
  'food_beverages',
  'arts_crafts',
  'beauty_wellness',
  'home_living',
  'jewelry_accessories',
  'technology',
  'services',
  'other'
);

-- Create vendor applications table
CREATE TABLE public.vendor_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Business Information
  business_name TEXT NOT NULL,
  business_description TEXT NOT NULL,
  category vendor_category NOT NULL,
  years_in_business INTEGER,
  products_description TEXT NOT NULL,
  
  -- Contact Information
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  business_address TEXT,
  city TEXT DEFAULT 'Kigali',
  
  -- Social Media
  instagram_handle TEXT,
  facebook_page TEXT,
  website_url TEXT,
  
  -- Media
  logo_url TEXT,
  product_images TEXT[] DEFAULT '{}',
  
  -- Application Details
  events_interested TEXT[] DEFAULT '{}',
  booth_size TEXT DEFAULT 'standard',
  special_requirements TEXT,
  how_heard_about_us TEXT,
  
  -- Status
  status application_status DEFAULT 'pending',
  admin_notes TEXT,
  
  -- Agreement
  agreed_to_terms BOOLEAN DEFAULT false,
  terms_agreed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public.vendor_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration)
CREATE POLICY "Anyone can submit vendor applications"
ON public.vendor_applications
FOR INSERT
TO public
WITH CHECK (true);

-- Allow reading own applications by email (for status check)
CREATE POLICY "Anyone can view applications by email"
ON public.vendor_applications
FOR SELECT
TO public
USING (true);

-- Create storage bucket for vendor uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'vendor-uploads',
  'vendor-uploads',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);

-- Allow public uploads to vendor-uploads bucket
CREATE POLICY "Anyone can upload vendor images"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'vendor-uploads');

-- Allow public read access to vendor images
CREATE POLICY "Anyone can view vendor images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'vendor-uploads');

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER update_vendor_applications_updated_at
BEFORE UPDATE ON public.vendor_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();