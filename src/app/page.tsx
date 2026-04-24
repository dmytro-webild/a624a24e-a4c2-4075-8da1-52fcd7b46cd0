"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Reserve",          id: "contact"},
      ]}
      brandName="Bite&Bottle"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain"}}
      title="Order, Reserve, Dine—All in One Place"
      description="Enjoy Bite&Bottle's signature cuisine delivered to your door or reserve your table instantly. Browse our full menu, choose your favorites, and pay securely online."
      buttons={[
        {
          text: "Start Your Order Now",          href: "#menu"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fish-slices-with-herbs-sliced-lemon_140725-3606.jpg",          imageAlt: "Bite&Bottle Dining Experience"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beef-with-pistachio-topping-served-with-fruits-berries_7502-7390.jpg",          imageAlt: "Signature Dish Presentation"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dessert_74190-5605.jpg",          imageAlt: "Gourmet Kitchen Prep"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/served-table-restaurant_93675-129092.jpg",          imageAlt: "Elegant Dining Table"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fried-vegetables-with-cheese-table_140725-8569.jpg",          imageAlt: "Takeaway Meal Selection"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-table-with-cheese-plate-pate-it_140725-12866.jpg",          imageAlt: "Modern Restaurant Ambiance"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Crafted for Kigali's Finest Moments"
      buttons={[
        {
          text: "Learn Our Story",          href: "#"},
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Fast Delivery",          tags: [
            "Speed",            "Convenience"],
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-scooter-out-smartphone-location-pointer-online-delivery-ecommerce-concept-blue-background-3d-illustration_56104-1806.jpg"},
        {
          id: "2",          title: "Table Reservations",          tags: [
            "Dining",            "Booking"],
          imageSrc: "http://img.b2bpic.net/free-photo/appointment-schedule-calendar-event-meeting-concept_53876-121132.jpg"},
        {
          id: "3",          title: "Secure Payments",          tags: [
            "Safe",            "MobileMoney"],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-hand-paying-with-smart-watch-pos_107791-17712.jpg"},
      ]}
      title="Why Order With Us"
      description="Experience convenience with our end-to-end digital services."
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          brand: "Chef Selection",          name: "Signature Steak",          price: "15,000 RWF",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/caesar-pizza-table_140725-6526.jpg"},
        {
          id: "2",          brand: "Popular",          name: "Classic Burger",          price: "8,500 RWF",          rating: 4,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/alfredo-fettuccine-with-mushroom-grated-parmesan-cherry-tomato_140725-6482.jpg"},
        {
          id: "3",          brand: "Vegan Choice",          name: "Roasted Vegetable Platter",          price: "7,000 RWF",          rating: 5,
          reviewCount: "45",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fried-burger-with-fresh-vegetables-meat-inside-round-plate_140725-11618.jpg"},
        {
          id: "4",          brand: "Chef Selection",          name: "Fresh Seafood Mix",          price: "18,000 RWF",          rating: 5,
          reviewCount: "92",          imageSrc: "http://img.b2bpic.net/free-photo/caesar-pizza-table_140725-6527.jpg"},
        {
          id: "5",          brand: "Comfort",          name: "Creamy Pasta",          price: "9,500 RWF",          rating: 4,
          reviewCount: "67",          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shot-tasty-sandwich-with-potatoes-wooden-table-with-sauces-cutlery_181624-56416.jpg"},
        {
          id: "6",          brand: "Snack",          name: "Garden Salad Bowl",          price: "6,000 RWF",          rating: 4,
          reviewCount: "34",          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-lettuce-chicken-corn-greens_141793-1252.jpg"},
      ]}
      title="Explore Our Signature Menu"
      description="Choose your favorites from our curated kitchen selection."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Kigali AgriFarm",        "Swift Courier",        "TechPay Rwanda",        "Local Coffee Co",        "Fresh Produce Hub",        "Rwanda Wine Importers",        "Urban Kitchen Decor"]}
      title="Trusted Partners"
      description="Collaborating with local farms and delivery leaders to bring excellence to your table."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          handle: "@sarahkigali",          testimonial: "The reservation process was seamless, and the meal was spectacular. Highly recommend!",          imageSrc: "http://img.b2bpic.net/free-photo/friends-talking-by-lunch_1098-14622.jpg"},
        {
          id: "2",          name: "Mark D.",          handle: "@markfoodie",          testimonial: "My go-to spot for business dinners in Kigali. The service and food are unmatched.",          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-businessman-smiling-happy-standing-city_839833-25759.jpg"},
        {
          id: "3",          name: "Elena R.",          handle: "@elenaeat",          testimonial: "Absolutely love the delivery tracking—my meal arrived hot and perfectly plated.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-business-woman-looking-up-copy-space_1262-3088.jpg"},
        {
          id: "4",          name: "Joseph B.",          handle: "@josephrw",          testimonial: "Authentic flavors and a welcoming atmosphere. My favorite spot in the city.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598351.jpg"},
        {
          id: "5",          name: "Amara K.",          handle: "@amarakigali",          testimonial: "Top-notch experience from reservation to the last bite of dessert.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg"},
      ]}
      title="Loved by Kigali Locals"
      description="Hear what our guests have to say about the Bite&Bottle dining experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Do you deliver throughout Kigali?",          content: "Yes, we offer city-wide delivery within a 15km radius of our location."},
        {
          id: "2",          title: "What payment methods do you accept?",          content: "We accept Mobile Money, debit cards, and cash on delivery for orders."},
        {
          id: "3",          title: "How far in advance should I reserve?",          content: "We recommend reserving at least 24 hours in advance for weekend bookings."},
      ]}
      title="Common Questions"
      description="Need help or have questions? Find answers here."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Reservations"
      title="Reserve Your Table Now"
      description="Skip the phone calls and book your perfect evening instantly using our online reservation tool."
      imageSrc="http://img.b2bpic.net/free-photo/wedding-table-number-high-angle_23-2149436438.jpg"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Confirm Reservation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Bite&Bottle"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
