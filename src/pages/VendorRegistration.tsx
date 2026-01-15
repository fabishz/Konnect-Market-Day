import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { BusinessInfoStep } from "@/components/vendor-registration/BusinessInfoStep";
import { ContactInfoStep } from "@/components/vendor-registration/ContactInfoStep";
import { MediaUploadStep } from "@/components/vendor-registration/MediaUploadStep";
import { ReviewStep } from "@/components/vendor-registration/ReviewStep";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface VendorFormData {
  // Business Info
  businessName: string;
  businessDescription: string;
  category: string;
  yearsInBusiness: string;
  productsDescription: string;
  
  // Contact Info
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  businessAddress: string;
  city: string;
  instagramHandle: string;
  facebookPage: string;
  websiteUrl: string;
  
  // Media
  logoUrl: string;
  productImages: string[];
  
  // Application Details
  eventsInterested: string[];
  boothSize: string;
  specialRequirements: string;
  howHeardAboutUs: string;
  
  // Agreement
  agreedToTerms: boolean;
}

const initialFormData: VendorFormData = {
  businessName: "",
  businessDescription: "",
  category: "",
  yearsInBusiness: "",
  productsDescription: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  businessAddress: "",
  city: "Kigali",
  instagramHandle: "",
  facebookPage: "",
  websiteUrl: "",
  logoUrl: "",
  productImages: [],
  eventsInterested: [],
  boothSize: "standard",
  specialRequirements: "",
  howHeardAboutUs: "",
  agreedToTerms: false,
};

const steps = [
  { id: 1, title: "Business Info", description: "Tell us about your business" },
  { id: 2, title: "Contact Details", description: "How can we reach you?" },
  { id: 3, title: "Media & Products", description: "Upload your logo and images" },
  { id: 4, title: "Review & Submit", description: "Review your application" },
];

const VendorRegistration = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<VendorFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const progress = (currentStep / steps.length) * 100;

  const updateFormData = (updates: Partial<VendorFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.businessName.trim() !== "" &&
          formData.businessDescription.trim() !== "" &&
          formData.category !== "" &&
          formData.productsDescription.trim() !== ""
        );
      case 2:
        return (
          formData.contactName.trim() !== "" &&
          formData.contactEmail.trim() !== "" &&
          formData.contactPhone.trim() !== ""
        );
      case 3:
        return true; // Media is optional
      case 4:
        return formData.agreedToTerms;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.agreedToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("vendor_applications").insert({
        business_name: formData.businessName,
        business_description: formData.businessDescription,
        category: formData.category as any,
        years_in_business: formData.yearsInBusiness ? parseInt(formData.yearsInBusiness) : null,
        products_description: formData.productsDescription,
        contact_name: formData.contactName,
        contact_email: formData.contactEmail,
        contact_phone: formData.contactPhone,
        business_address: formData.businessAddress || null,
        city: formData.city,
        instagram_handle: formData.instagramHandle || null,
        facebook_page: formData.facebookPage || null,
        website_url: formData.websiteUrl || null,
        logo_url: formData.logoUrl || null,
        product_images: formData.productImages,
        events_interested: formData.eventsInterested,
        booth_size: formData.boothSize,
        special_requirements: formData.specialRequirements || null,
        how_heard_about_us: formData.howHeardAboutUs || null,
        agreed_to_terms: formData.agreedToTerms,
        terms_agreed_at: new Date().toISOString(),
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast.error(error.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-forest" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Application Submitted!
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for applying to become a Konnect Market Day vendor. We'll review 
                your application and get back to you within 3-5 business days at{" "}
                <span className="font-medium text-foreground">{formData.contactEmail}</span>
              </p>
              <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• Our team will review your application</li>
                  <li>• You'll receive an email confirmation within 24 hours</li>
                  <li>• If approved, we'll send payment instructions</li>
                  <li>• Once payment is confirmed, you'll receive event details</li>
                </ul>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
                <Button onClick={() => navigate("/events")}>
                  View Upcoming Events
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Vendor Registration
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join Konnect Market Day and showcase your products to thousands of visitors
            </p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        currentStep > step.id
                          ? "bg-forest text-accent-foreground"
                          : currentStep === step.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                    </div>
                    <div className="hidden md:block text-center mt-2">
                      <p className={`text-sm font-medium ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-4 rounded ${
                        currentStep > step.id ? "bg-forest" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Form Content */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 1 && (
                  <BusinessInfoStep formData={formData} updateFormData={updateFormData} />
                )}
                {currentStep === 2 && (
                  <ContactInfoStep formData={formData} updateFormData={updateFormData} />
                )}
                {currentStep === 3 && (
                  <MediaUploadStep formData={formData} updateFormData={updateFormData} />
                )}
                {currentStep === 4 && (
                  <ReviewStep formData={formData} updateFormData={updateFormData} />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {currentStep < steps.length ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="gap-2 bg-gradient-hero"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="gap-2 bg-gradient-hero"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorRegistration;
