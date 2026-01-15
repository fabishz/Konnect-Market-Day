import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VendorFormData } from "@/pages/VendorRegistration";
import { ClipboardCheck, Store, User, Image, Calendar } from "lucide-react";
import { getUpcomingEvents } from "@/data/events";

interface ReviewStepProps {
  formData: VendorFormData;
  updateFormData: (updates: Partial<VendorFormData>) => void;
}

const categoryLabels: Record<string, string> = {
  fashion_textiles: "Fashion & Textiles",
  food_beverages: "Food & Beverages",
  arts_crafts: "Arts & Crafts",
  beauty_wellness: "Beauty & Wellness",
  home_living: "Home & Living",
  jewelry_accessories: "Jewelry & Accessories",
  technology: "Technology",
  services: "Services",
  other: "Other",
};

export function ReviewStep({ formData, updateFormData }: ReviewStepProps) {
  const upcomingEvents = getUpcomingEvents();

  const handleEventSelection = (eventId: string, checked: boolean) => {
    if (checked) {
      updateFormData({ eventsInterested: [...formData.eventsInterested, eventId] });
    } else {
      updateFormData({
        eventsInterested: formData.eventsInterested.filter((id) => id !== eventId),
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <ClipboardCheck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Review Your Application</h2>
            <p className="text-sm text-muted-foreground">Please verify your information</p>
          </div>
        </div>

        {/* Business Info Summary */}
        <div className="mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-2 mb-3">
            <Store className="w-4 h-4 text-muted-foreground" />
            <h3 className="font-medium">Business Information</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Business Name:</span>
              <p className="font-medium">{formData.businessName}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Category:</span>
              <p className="font-medium">{categoryLabels[formData.category] || formData.category}</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-muted-foreground">Description:</span>
              <p className="font-medium">{formData.businessDescription}</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-muted-foreground">Products/Services:</span>
              <p className="font-medium">{formData.productsDescription}</p>
            </div>
          </div>
        </div>

        {/* Contact Info Summary */}
        <div className="mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-2 mb-3">
            <User className="w-4 h-4 text-muted-foreground" />
            <h3 className="font-medium">Contact Information</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Contact Person:</span>
              <p className="font-medium">{formData.contactName}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Email:</span>
              <p className="font-medium">{formData.contactEmail}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Phone:</span>
              <p className="font-medium">{formData.contactPhone}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Location:</span>
              <p className="font-medium">{formData.city}</p>
            </div>
          </div>
        </div>

        {/* Media Summary */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image className="w-4 h-4 text-muted-foreground" />
            <h3 className="font-medium">Uploaded Media</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {formData.logoUrl && (
              <div>
                <span className="text-xs text-muted-foreground block mb-1">Logo</span>
                <img
                  src={formData.logoUrl}
                  alt="Logo"
                  className="w-16 h-16 rounded-lg object-cover border border-border"
                />
              </div>
            )}
            {formData.productImages.length > 0 && (
              <div>
                <span className="text-xs text-muted-foreground block mb-1">
                  Product Images ({formData.productImages.length})
                </span>
                <div className="flex gap-2">
                  {formData.productImages.slice(0, 4).map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`Product ${i + 1}`}
                      className="w-16 h-16 rounded-lg object-cover border border-border"
                    />
                  ))}
                  {formData.productImages.length > 4 && (
                    <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
                      +{formData.productImages.length - 4}
                    </div>
                  )}
                </div>
              </div>
            )}
            {!formData.logoUrl && formData.productImages.length === 0 && (
              <p className="text-sm text-muted-foreground">No images uploaded</p>
            )}
          </div>
        </div>
      </div>

      {/* Event Selection */}
      <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <h3 className="font-medium">Events You're Interested In</h3>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <label
              key={event.id}
              className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer"
            >
              <Checkbox
                checked={formData.eventsInterested.includes(event.id)}
                onCheckedChange={(checked) => handleEventSelection(event.id, checked as boolean)}
              />
              <div>
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })} • {event.location}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
        <h3 className="font-medium mb-4">Additional Information</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="boothSize">Preferred Booth Size</Label>
            <Select
              value={formData.boothSize}
              onValueChange={(value) => updateFormData({ boothSize: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small (2x2m) - 50,000 RWF</SelectItem>
                <SelectItem value="standard">Standard (3x3m) - 80,000 RWF</SelectItem>
                <SelectItem value="large">Large (4x4m) - 120,000 RWF</SelectItem>
                <SelectItem value="premium">Premium (5x5m) - 180,000 RWF</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequirements">Special Requirements</Label>
            <Textarea
              id="specialRequirements"
              placeholder="Any special setup needs, electrical requirements, etc."
              rows={3}
              value={formData.specialRequirements}
              onChange={(e) => updateFormData({ specialRequirements: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="howHeardAboutUs">How did you hear about us?</Label>
            <Select
              value={formData.howHeardAboutUs}
              onValueChange={(value) => updateFormData({ howHeardAboutUs: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="friend">Friend/Family</SelectItem>
                <SelectItem value="previous_event">Previous Event</SelectItem>
                <SelectItem value="google">Google Search</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={formData.agreedToTerms}
            onCheckedChange={(checked) => updateFormData({ agreedToTerms: checked as boolean })}
            className="mt-1"
          />
          <div>
            <p className="font-medium">
              I agree to the Terms and Conditions <span className="text-destructive">*</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              By submitting this application, I confirm that all information provided is accurate 
              and I agree to Konnect Market Day's vendor terms, including booth setup guidelines, 
              payment terms, and event policies.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
