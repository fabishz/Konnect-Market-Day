import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { VendorFormData } from "@/pages/VendorRegistration";
import { User, Mail, Phone, MapPin, Instagram, Globe } from "lucide-react";

interface ContactInfoStepProps {
  formData: VendorFormData;
  updateFormData: (updates: Partial<VendorFormData>) => void;
}

export function ContactInfoStep({ formData, updateFormData }: ContactInfoStepProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <User className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p className="text-sm text-muted-foreground">How can we reach you?</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Contact Name */}
        <div className="space-y-2">
          <Label htmlFor="contactName">
            Contact Person <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="contactName"
              placeholder="Full name"
              className="pl-10"
              value={formData.contactName}
              onChange={(e) => updateFormData({ contactName: e.target.value })}
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactEmail">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="contactEmail"
                type="email"
                placeholder="email@example.com"
                className="pl-10"
                value={formData.contactEmail}
                onChange={(e) => updateFormData({ contactEmail: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPhone">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="contactPhone"
                type="tel"
                placeholder="+250 788 123 456"
                className="pl-10"
                value={formData.contactPhone}
                onChange={(e) => updateFormData({ contactPhone: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="businessAddress">Business Address</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="businessAddress"
                placeholder="Street address"
                className="pl-10"
                value={formData.businessAddress}
                onChange={(e) => updateFormData({ businessAddress: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Kigali"
              value={formData.city}
              onChange={(e) => updateFormData({ city: e.target.value })}
            />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="pt-6 border-t border-border">
          <h3 className="font-medium mb-4">Social Media (Optional)</h3>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="instagramHandle">Instagram</Label>
                <div className="relative">
                  <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="instagramHandle"
                    placeholder="@yourbusiness"
                    className="pl-10"
                    value={formData.instagramHandle}
                    onChange={(e) => updateFormData({ instagramHandle: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="facebookPage">Facebook Page</Label>
                <Input
                  id="facebookPage"
                  placeholder="facebook.com/yourbusiness"
                  value={formData.facebookPage}
                  onChange={(e) => updateFormData({ facebookPage: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="websiteUrl"
                  placeholder="https://yourbusiness.com"
                  className="pl-10"
                  value={formData.websiteUrl}
                  onChange={(e) => updateFormData({ websiteUrl: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
