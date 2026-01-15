import { useState, useCallback } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { VendorFormData } from "@/pages/VendorRegistration";
import { Upload, Image, X, Loader2, ImagePlus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface MediaUploadStepProps {
  formData: VendorFormData;
  updateFormData: (updates: Partial<VendorFormData>) => void;
}

export function MediaUploadStep({ formData, updateFormData }: MediaUploadStepProps) {
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const [isUploadingProduct, setIsUploadingProduct] = useState(false);

  const uploadFile = async (file: File, path: string): Promise<string | null> => {
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${path}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("vendor-uploads")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("vendor-uploads").getPublicUrl(fileName);
      return data.publicUrl;
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(error.message || "Failed to upload file");
      return null;
    }
  };

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      return;
    }

    setIsUploadingLogo(true);
    const url = await uploadFile(file, "logos");
    if (url) {
      updateFormData({ logoUrl: url });
      toast.success("Logo uploaded successfully");
    }
    setIsUploadingLogo(false);
  };

  const handleProductImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    if (formData.productImages.length + files.length > 6) {
      toast.error("Maximum 6 product images allowed");
      return;
    }

    setIsUploadingProduct(true);
    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`${file.name} is too large. Max 5MB per file.`);
        continue;
      }
      const url = await uploadFile(file, "products");
      if (url) uploadedUrls.push(url);
    }

    if (uploadedUrls.length > 0) {
      updateFormData({ productImages: [...formData.productImages, ...uploadedUrls] });
      toast.success(`${uploadedUrls.length} image(s) uploaded`);
    }
    setIsUploadingProduct(false);
  };

  const removeProductImage = (index: number) => {
    const newImages = [...formData.productImages];
    newImages.splice(index, 1);
    updateFormData({ productImages: newImages });
  };

  const removeLogo = () => {
    updateFormData({ logoUrl: "" });
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Image className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Media & Products</h2>
          <p className="text-sm text-muted-foreground">Upload your logo and product images</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Logo Upload */}
        <div className="space-y-4">
          <div>
            <Label>Business Logo</Label>
            <p className="text-sm text-muted-foreground">
              Square image recommended (at least 200x200px)
            </p>
          </div>

          {formData.logoUrl ? (
            <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-border">
              <img
                src={formData.logoUrl}
                alt="Business logo"
                className="w-full h-full object-cover"
              />
              <button
                onClick={removeLogo}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:opacity-80"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary hover:bg-muted/50 transition-colors">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleLogoUpload}
                className="hidden"
                disabled={isUploadingLogo}
              />
              {isUploadingLogo ? (
                <Loader2 className="w-6 h-6 text-muted-foreground animate-spin" />
              ) : (
                <>
                  <Upload className="w-6 h-6 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground">Upload Logo</span>
                </>
              )}
            </label>
          )}
        </div>

        {/* Product Images */}
        <div className="space-y-4">
          <div>
            <Label>Product Images</Label>
            <p className="text-sm text-muted-foreground">
              Upload up to 6 product images (max 5MB each)
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {formData.productImages.map((url, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden border border-border"
              >
                <img
                  src={url}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeProductImage(index)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:opacity-80"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}

            {formData.productImages.length < 6 && (
              <label className="flex flex-col items-center justify-center aspect-square border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary hover:bg-muted/50 transition-colors">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  multiple
                  onChange={handleProductImageUpload}
                  className="hidden"
                  disabled={isUploadingProduct}
                />
                {isUploadingProduct ? (
                  <Loader2 className="w-6 h-6 text-muted-foreground animate-spin" />
                ) : (
                  <>
                    <ImagePlus className="w-6 h-6 text-muted-foreground mb-2" />
                    <span className="text-xs text-muted-foreground text-center px-2">
                      Add Images
                    </span>
                  </>
                )}
              </label>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-muted/50 rounded-xl p-4">
          <h4 className="font-medium text-sm mb-2">📸 Photo Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Use well-lit, high-quality images</li>
            <li>• Show your products from multiple angles</li>
            <li>• Include lifestyle shots of products in use</li>
            <li>• Avoid blurry or dark images</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
