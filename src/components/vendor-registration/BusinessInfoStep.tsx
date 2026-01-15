import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VendorFormData } from "@/pages/VendorRegistration";
import { Store, FileText, Layers } from "lucide-react";

interface BusinessInfoStepProps {
  formData: VendorFormData;
  updateFormData: (updates: Partial<VendorFormData>) => void;
}

const categories = [
  { value: "fashion_textiles", label: "Fashion & Textiles" },
  { value: "food_beverages", label: "Food & Beverages" },
  { value: "arts_crafts", label: "Arts & Crafts" },
  { value: "beauty_wellness", label: "Beauty & Wellness" },
  { value: "home_living", label: "Home & Living" },
  { value: "jewelry_accessories", label: "Jewelry & Accessories" },
  { value: "technology", label: "Technology" },
  { value: "services", label: "Services" },
  { value: "other", label: "Other" },
];

export function BusinessInfoStep({ formData, updateFormData }: BusinessInfoStepProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Store className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Business Information</h2>
          <p className="text-sm text-muted-foreground">Tell us about your business</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Business Name */}
        <div className="space-y-2">
          <Label htmlFor="businessName">
            Business Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="businessName"
            placeholder="e.g., Kigali Coffee Co."
            value={formData.businessName}
            onChange={(e) => updateFormData({ businessName: e.target.value })}
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category">
            Business Category <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.category}
            onValueChange={(value) => updateFormData({ category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Business Description */}
        <div className="space-y-2">
          <Label htmlFor="businessDescription">
            Business Description <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="businessDescription"
            placeholder="Describe your business, its story, and what makes it unique..."
            rows={4}
            value={formData.businessDescription}
            onChange={(e) => updateFormData({ businessDescription: e.target.value })}
          />
          <p className="text-xs text-muted-foreground">
            This will be displayed on your vendor profile
          </p>
        </div>

        {/* Years in Business */}
        <div className="space-y-2">
          <Label htmlFor="yearsInBusiness">Years in Business</Label>
          <Select
            value={formData.yearsInBusiness}
            onValueChange={(value) => updateFormData({ yearsInBusiness: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select years in business" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Less than 1 year</SelectItem>
              <SelectItem value="1">1-2 years</SelectItem>
              <SelectItem value="3">3-5 years</SelectItem>
              <SelectItem value="5">5-10 years</SelectItem>
              <SelectItem value="10">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Description */}
        <div className="space-y-2">
          <Label htmlFor="productsDescription">
            Products/Services <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="productsDescription"
            placeholder="List the main products or services you'll be offering at the market..."
            rows={3}
            value={formData.productsDescription}
            onChange={(e) => updateFormData({ productsDescription: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
