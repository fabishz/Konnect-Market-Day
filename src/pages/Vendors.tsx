import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { vendors, categories } from "@/data/vendors";
import { Search, Filter, Instagram, ExternalLink, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Vendors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || vendor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-warm">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Vendor Directory
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Meet Our <span className="text-gradient">Vendors</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover talented artisans, entrepreneurs, and creators who bring 
                Konnect Market Day to life with their unique products and stories
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vendors Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                Showing {filteredVendors.length} of {vendors.length} vendors
              </p>
            </div>

            {filteredVendors.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVendors.map((vendor, index) => (
                  <motion.div
                    key={vendor.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 9) * 0.05 }}
                    className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={vendor.coverImage}
                        alt={vendor.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-xs font-medium">
                        {vendor.category}
                      </span>
                      {vendor.featured && (
                        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold text-foreground text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={vendor.logo}
                          alt={`${vendor.name} logo`}
                          className="w-14 h-14 rounded-xl object-cover border-2 border-border"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{vendor.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {vendor.eventsParticipated} events participated
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {vendor.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {vendor.products.slice(0, 3).map((product) => (
                          <span
                            key={product}
                            className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
                          >
                            {product}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex gap-2">
                          {vendor.socialLinks.instagram && (
                            <a
                              href={`https://instagram.com/${vendor.socialLinks.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Instagram className="w-4 h-4" />
                            </a>
                          )}
                          {vendor.socialLinks.website && (
                            <a
                              href={`https://${vendor.socialLinks.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <Link
                          to={`/vendors/${vendor.id}`}
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Store className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Vendors Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Vendor CTA */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Want to Join Our Vendor Community?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Showcase your products to thousands of visitors, connect with fellow 
                entrepreneurs, and grow your business with Konnect Market Day.
              </p>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link to="/vendor-registration">
                Apply to Become a Vendor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vendors;
