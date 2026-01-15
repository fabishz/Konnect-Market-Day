export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      vendor_applications: {
        Row: {
          admin_notes: string | null
          agreed_to_terms: boolean | null
          booth_size: string | null
          business_address: string | null
          business_description: string
          business_name: string
          category: Database["public"]["Enums"]["vendor_category"]
          city: string | null
          contact_email: string
          contact_name: string
          contact_phone: string
          created_at: string
          events_interested: string[] | null
          facebook_page: string | null
          how_heard_about_us: string | null
          id: string
          instagram_handle: string | null
          logo_url: string | null
          product_images: string[] | null
          products_description: string
          special_requirements: string | null
          status: Database["public"]["Enums"]["application_status"] | null
          terms_agreed_at: string | null
          updated_at: string
          website_url: string | null
          years_in_business: number | null
        }
        Insert: {
          admin_notes?: string | null
          agreed_to_terms?: boolean | null
          booth_size?: string | null
          business_address?: string | null
          business_description: string
          business_name: string
          category: Database["public"]["Enums"]["vendor_category"]
          city?: string | null
          contact_email: string
          contact_name: string
          contact_phone: string
          created_at?: string
          events_interested?: string[] | null
          facebook_page?: string | null
          how_heard_about_us?: string | null
          id?: string
          instagram_handle?: string | null
          logo_url?: string | null
          product_images?: string[] | null
          products_description: string
          special_requirements?: string | null
          status?: Database["public"]["Enums"]["application_status"] | null
          terms_agreed_at?: string | null
          updated_at?: string
          website_url?: string | null
          years_in_business?: number | null
        }
        Update: {
          admin_notes?: string | null
          agreed_to_terms?: boolean | null
          booth_size?: string | null
          business_address?: string | null
          business_description?: string
          business_name?: string
          category?: Database["public"]["Enums"]["vendor_category"]
          city?: string | null
          contact_email?: string
          contact_name?: string
          contact_phone?: string
          created_at?: string
          events_interested?: string[] | null
          facebook_page?: string | null
          how_heard_about_us?: string | null
          id?: string
          instagram_handle?: string | null
          logo_url?: string | null
          product_images?: string[] | null
          products_description?: string
          special_requirements?: string | null
          status?: Database["public"]["Enums"]["application_status"] | null
          terms_agreed_at?: string | null
          updated_at?: string
          website_url?: string | null
          years_in_business?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      application_status: "pending" | "approved" | "rejected" | "under_review"
      vendor_category:
        | "fashion_textiles"
        | "food_beverages"
        | "arts_crafts"
        | "beauty_wellness"
        | "home_living"
        | "jewelry_accessories"
        | "technology"
        | "services"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: ["pending", "approved", "rejected", "under_review"],
      vendor_category: [
        "fashion_textiles",
        "food_beverages",
        "arts_crafts",
        "beauty_wellness",
        "home_living",
        "jewelry_accessories",
        "technology",
        "services",
        "other",
      ],
    },
  },
} as const
