import { Consultations } from "./consultations";
import { Contact } from "./contact";
import { ContactHeader } from "./contact-header";
import { Cures } from "./cures";
import { Etiopathie } from "./etiopathie";
import { Footer } from "./footer";
import { Gallery } from "./galery";
import { HeaderMenu } from "./header-menu";
import { Melaine } from "./melaine";
import { Questions } from "./questions";
import { Testimonial } from "./testimonial";

export default function Home() {
  return (
    <div>
      <ContactHeader />
      <HeaderMenu />
      <Etiopathie />
      <Cures />
      <div className="divider divider-left h-4 -mt-4"></div>
      <Melaine />
      <div className="divider divider-right h-4"></div>
      <Consultations />
      <Testimonial />
      <Questions />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
