import React from "react";
import "../styles/global.css";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import DynamicSeo from "../components/global/DynamicSeo";

const Vacancies = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Vacancies" />
      <div className="mainteb">
        <div className="card-v">
          <div className="card-11">
            <h2>Apprentice Nurse</h2>
            <p>
              apprentice nurse works under the supervision of registered nurses
              and other healthcare professionals to provide basic patient care
              and support services. This role is designed to provide hands-on
              experience and training for individuals pursuing a career in
              nursing.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2>Registered Nurse</h2>
            <p>
              Registered Nurse (RN) is a highly skilled healthcare professional
              responsible for providing and coordinating patient care in various
              healthcare settings. Registered Nurses assess patient health
              needs, develop and implement nursing care plans, and maintain
              medical records.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2>Associate Dentist</h2>
            <p>
              Associate Dentist is a licensed dental professional who provides
              comprehensive dental care to patients. They diagnose and treat
              dental issues, educate patients about oral health, and promote
              preventive dental care.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2> Dental Therapist</h2>
            <p>
              Dental Therapist is a licensed dental professional who works under
              the supervision of dentists to provide preventive and restorative
              dental care to patients. Dental Therapists focus on routine dental
              procedures, such as cleanings, fillings, and preventive
              treatments.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2> Dental Hygienist</h2>
            <p>
              Dental Hygienist is a licensed dental professional who specializes
              in preventive oral care. They work closely with dentists to
              provide dental cleanings, examine patients for signs of oral
              diseases, and educate patients about proper oral hygiene
              techniques.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2> Vocational Training Dentist</h2>
            <p>
              Vocational Training Dentist, also known as a Dental Resident or
              Dental Intern, is a licensed dental professional undergoing
              advanced training and education in various dental specialties.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2>Foreign Visa and Sponsorship</h2>
            <p>
              A Pav Dental is seeking qualified dentists from abroad and
              offering foreign visa sponsorship to support their relocation and
              employment. This position is designed to provide skilled dental
              professionals with an opportunity to work in a new environment,
              expand their expertise, and contribute to the oral health of the
              community.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vacancies;

export const Head = () => (
  <DynamicSeo
    title="Our Dental Vacancies | Stay Informed with Pav Dental Updates"
    description="Stay informed about the latest dental Vacancies."
  />
);
