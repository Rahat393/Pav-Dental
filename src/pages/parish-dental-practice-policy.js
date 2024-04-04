import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";

const policies = [
  {
    name: "Accident and Incident Reporting",
    href: "/policies/Policies/Accident-and-Incident-Reporting.pdf",
  },
  {
    name: "Asbestos Management",
    href: "/policies/Policies/Asbestos-Management.pdf",
  },
  {
    name: "Blood Spillages",
    href: "/policies/Policies/Blood-Spillages.pdf",
  },
  {
    name: "CCTV-Policy",
    href: "/policies/Policies/CCTV-Policy.pdf",
  },
  {
    name: "Clinical Waste Disposal",
    href: "/policies/Consent/Clinical-Waste-Disposal.pdf",
  },
  {
    name: "Complaints-Policy",
    href: "/policies/Consent/Complaints-Policy.pdf",
  },
  {
    name: "Control of Substances Hazardous to Health (COSHH)",
    href: "/policies/Consent/Control-of-Substances.pdf",
  },
  {
    name: "Display Screen Equipment (DSE) Use",
    href: "/policies/Consent/Display-Screen.pdf",
  },
  {
    name: "Driving for Work",
    href: "/policies/Consent/Driving-for-Work.pdf",
  },
  {
    name: "Electrical Safety",
    href: "/policies/Consent/ElectricalSafety.pdf",
  },
  {
    name: "Environmental",
    href: "/policies/Consent/Environmental.pdf",
  },
  {
    name: "Facial Aesthetics Treatments",
    href: "/policies/Consent/FacialAestheticsTreatments.pdf",
  },
  {
    name: "Failed Appointments and Short Notice Cancellations Policy",
    href: "/policies/Consent/Failed-Appointments-and-Short-Notice-Cancellations-Policy.pdf",
  },
  {
    name: "Fire Safety",
    href: "/policies/Consent/FireSafety.pdf",
  },
  {
    name: "Fire Equipment Management",
    href: "/policies/Consent/FireEquipmentManagement.pdf",
  },
  {
    name: "Fire Alarm Response",
    href: "/policies/Consent/FireAlarmResponse.pdf",
  },
  {
    name: "First Aid and Medical Emergency",
    href: "/policies/Consent/FirstAidandMedicalEmergency.pdf",
  },
  {
    name: "Flooding Preparedness and Response",
    href: "/policies/Consent/FloodingPreparednessandResponse.pdf",
  },
  {
    name: "GDPR Policy",
    href: "/policies/Consent/GDPR-Policy.pdf",
  },
  {
    name: "Grievance Policy",
    href: "/policies/Consent/Grievance-Policy.pdf",
  },
  {
    name: "Hazard Reporting",
    href: "/policies/Consent/HazardReporting.pdf",
  },
  {
    name: "Health and Safety Training",
    href: "/policies/Consent/HealthandSafetyTraining.pdf",
  },
  {
    name: "Infection Control and Decontamination",
    href: "/policies/Consent/InfectionControlandDecontamination.pdf",
  },
  {
    name: "Laser use in Dentistry",
    href: "/policies/Consent/LaseruseinDentistry.pdf",
  },
  {
    name: "Latex Management",
    href: "/policies/Consent/LatexManagement.pdf",
  },
  {
    name: "Lone Working",
    href: "/policies/Consent/LoneWorking.pdf",
  },
  {
    name: "Maintenance",
    href: "/policies/Consent/Maintenance.pdf",
  },
  {
    name: "Neddle Stick Injury Protocol",
    href: "/policies/Consent/Neddle-Stick-Injury-Protocol.pdf",
  },
  {
    name: "Patient Deregistration Policy",
    href: "/policies/Consent/Patient-Deregistration-Policy.pdf",
  },
  {
    name: "Pest Control Policy",
    href: "/policies/Consent/Pest-Control-Policy.pdf",
  },
  {
    name: "Premises and Equipment Policy",
    href: "/policies/Consent/PremisesandEquipmentPolicy.pdf",
  },
  {
    name: "Registration-Policy",
    href: "/policies/Consent/Registration-Policy.pdf",
  },{
    name: "Risk Assessment",
    href: "/policies/Consent/RiskAssessment.pdf",
  },
  {
    name: "Rubber Dam Use",
    href: "/policies/Consent/RubberDamUse.pdf",
  },
  {
    name: "Security",
    href: "/policies/Consent/Security.pdf",
  },
  {
    name: "Sedation in Dental Procedures",
    href: "/policies/Consent/SedationinDentalProcedures.pdf",
  },
  {
    name: "Sharps and Needlestick Injury Management",
    href: "/policies/Consent/SharpsandNeedlestickInjuryManagement.pdf",
  },
  {
    name: "Sick Leave Policy",
    href: "/policies/Consent/Sick-Leave-Policy.pdf",
  },
  {
    name: "Single Use Equipment",
    href: "/policies/Consent/SingleUseEquipment.pdf",
  },
  {
    name: "Transport",
    href: "/policies/Consent/Transport.pdf",
  },
  {
    name: "Use of Amalgam and Matrix Band",
    href: "/policies/Consent/UseofAmalgamandMatrixBand.pdf",
  },
  {
    name: "Visiting Contractors",
    href: "/policies/Consent/VisitingContractors.pdf",
  },
  {
    name: "Window Security",
    href: "/policies/Consent/WindowSecurity.pdf",
  },
  {
    name: "Workplace Environment",
    href: "/policies/Consent/WorkplaceEnvironment.pdf",
  },
  
];

const consent = [
  {
    name: "Consent Bonding",
    href: "/policies/Consent/Consent-Bonding.pdf",
  },
  {
    name: "Consent Bridge",
    href: "/policies/Consent/Consent-Bridge.pdf",
  },
  {
    name: "Consent Crown",
    href: "/policies/Consent/Consent-Crown.pdf",
  },
  {
    name: "Consent-Extraction",
    href: "/policies/Consent/Consent-Extraction.pdf",
  },
  {
    name: "Consent-Filling",
    href: "/policies/Consent/Consent-Filling.pdf",
  },
  {
    name: "Consent-Flexible-Denture",
    href: "/policies/Consent/Consent-Flexible-Denture.pdf",
  },
  {
    name: "Consent-Grills-for-Music-and-Film-Industry",
    href: "/policies/Consent/Consent-Grills-for-Music-and-Film-Industry.pdf",
  },
  {
    name: "Consent-Implant",
    href: "/policies/Consent/Consent-Implant.pdf",
  },
  {
    name: "Consent-Root-Canal",
    href: "/policies/Consent/Consent-Root-Canal.pdf",
  },
  {
    name: "Consent-Veneer",
    href: "/policies/Consent/Consent-Veneer.pdf",
  },
  {
    name: "Consent-Whitening",
    href: "/policies/Consent/Consent-Whitening.pdf",
  },
];

const poig = [
  {
    name: "POIG - Root Canal",
    href: "/policies/POIG/POIG-Root-Canal.pdf",
  },
  {
    name: "POIG - Tooth Extraction",
    href: "/policies/POIG/POIG-Tooth-Extraction.pdf",
  },
  {
    name: "POIG - Whitening",
    href: "/policies/POIG/POIG-Whitening.pdf",
  },
];

const ParishDentalPracticePolicy = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Pav Dental Documents" />
      <div className="container mx-auto my-10">
        {/* <details>
          <summary class="accordion">Failed to attend policy</summary>

          <div class="accordionDrop">
            <div className="policy">
              <h3 className="text-2xl	 font-bold	text-black my-8">
                Pav Dental - Failed Appointments and Short Notice
                <br />
                Cancellations Policy
              </h3>
              <p className="Blue font-bold text-xl my-8">Introduction</p>
              <p className="text-xl my-8">
                At Pav Dental, we strive to provide timely and quality dental
                care to all our patients. We understand that your time is
                valuable, and so is ours. Unattended appointments and short
                notice cancellations disrupt the practice's ability to serve
                other patients in need. Therefore, we have implemented the
                following Failed Appointments and Short Notice Cancellations
                Policy.
              </p>
              <p className="Blue font-bold text-xl my-8">Policy Guidelines</p>
              <ol className="list-decimal px-10 text-xl">
                <li className="my-4">
                  <b>Notification Requirement:</b> We require a minimum of 2
                  working days' notice if you need to cancel or reschedule an
                  appointment. This allows us to offer the time slot to other
                  patients who may be in urgent need of care.
                </li>
                <li className="my-4">
                  <b>Short Notice Cancellation:</b> If an appointment is
                  cancelled with less than 2 working days' notice, the following
                  will apply:
                  <ul className="list-disk p-6 text-xl">
                    <li className="my-3">
                      For NHS patients: In line with NHS regulations, if a
                      patient cancels at short notice 4 times within a 2-year
                      period, we reserve the right to deny any further NHS
                      treatment.
                    </li>
                    <li className="my-3">
                      For private appointments: Cancellations under the 2
                      working days' notice period will result in a loss of
                      deposit.
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <b>Failed to Attend:</b> If a patient fails to show up for an
                  appointment without any prior notice, the following will
                  apply:
                  <ul className="list-disk p-6 text-xl">
                    <li className="my-3">
                      For NHS patients: If a patient fails to attend 2
                      appointments within a 2-year period, we reserve the right
                      to deny any further NHS treatment.
                    </li>
                    <li className="my-3">
                      {" "}
                      For private appointments: A failed appointment will result
                      in a loss of deposit and may also incur an additional fee.
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <b>Double Appointments:</b> If a double appointment is booked,
                  which is greater than 40 minutes, this will count as 2
                  appointments. Consequently, if such an appointment is missed
                  or cancelled with less than the required notice, it will count
                  as 2 failed appointments or 2 short notice cancellations, as
                  applicable
                </li>
                <li className="my-4">
                  <b>Late Cancellation:</b> Cancellations made less than 3 hours
                  before the scheduled appointment time will be marked as a
                  "Failed to Attend."
                </li>
                <li className="my-4">
                  <b> Non-Discrimination:</b> This policy is applied uniformly
                  across our entire patient base to ensure fairness and to
                  prevent any form of discrimination.
                </li>
              </ol>
              <p className="Blue font-bold text-xl my-8">Exceptions</p>
              <p className="text-xl my-8">
                We understand that emergencies and unforeseen circumstances can
                occur. Exceptions to this policy will be considered on a
                case-by-case basis and are at the discretion of Pav Dental.
              </p>
              <p className="Blue font-bold text-xl my-8">Contact Information</p>
              <p className=" text-xl my-8">
                If you need to cancel or reschedule an appointment, please
                contact us as soon as possible at{" "}
                <a href="mailto:parishdental@gmail.com">
                  parishdental@gmail.com
                </a>
              </p>
            </div>
          </div>
        </details>
        <details>
          <summary class="accordion">Sick Leave Notification Policy</summary>

          <div class="accordionDrop">
            <p className="text-2xl	 font-bold	text-black my-8">
              Purpose: To ensure the smooth operation of our facility and
              minimize disruption to our patients, it is essential that staff
              members provide timely notification in the event of illness or any
              unforeseen circumstances that prevent them from attending work.
              This policy outlines the procedure for notifying management of
              such absences.
            </p>
            <p className="text-xl my-8">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mt-8">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol className="list-decimal p-10 text-xl">
              <li>
                <p>
                  The person responsible for dealing with any complaints about
                  the service that we provide is the Manager, our Complaints’
                  Manager.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If we receive a complaint by telephone or in person, we will
                  listen and offer to refer the individual to the Complaints’
                  Manager immediately. If the Complaints’ Manager is not
                  available at the time, we arrange a convenient time for the
                  Complaints’ Manager to contact the individual. The member of
                  staff will take brief details of the issue and pass it to the
                  Complaints’ Manager and provide the individual with a copy. If
                  the matter requires a more immediate response, we will arrange
                  for a senior member of the dental team to deal with it.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If we receive a complaint in writing or by e-mail, it will be
                  passed immediately to the Complaints’ Manager.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If a complaint is about any aspect of clinical care or
                  associated charges, it will usually be referred to the dentist
                  concerned, unless the individual does not want this to happen.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  We will acknowledge a complaint in writing and enclose a copy
                  of this code of practice as soon as possible, normally within
                  3 working days. We will offer to discuss the complaint with
                  the individual, and confirm how they would like to be kept
                  informed of developments – by telephone, letters or e-mail or
                  by face-to-face meetings. We will inform the individual about
                  how the complaint will be handled and the likely time that the
                  investigation will take to complete. If the individual does
                  not wish to discuss the complaint further, we will still
                  inform them of the expected timescale for completing the
                  investigation.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  We will seek to investigate the complaint within six months
                  and, as far as reasonably practicable, we will keep the
                  individual informed as to the progress of the investigation.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  When we have completed our investigation, we will provide the
                  individual with a full written report, which will include an
                  explanation of how we considered the complaint, the
                  conclusions reached in respect of each specific part of the
                  complaint, details of any necessary remedial action taken and
                  whether further action will be taken.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  Proper and comprehensive records will be kept of any
                  complaints received and the action we take. These records will
                  be reviewed regularly to ensure that we take every opportunity
                  to improve our service
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If the individual making the complaint is not satisfied with
                  the result of our investigation, we will advise them to refer
                  the complaint to:
                </p>
              </li>
            </ol>
            <p className="text-xl mb-8">
              For complaints about NHS treatment: NHS England, PO Box 16738,
              Redditch B97 9PT (email: England.contactus@nhs.net); or The
              Parliamentary and Health Service Ombudsman, Millbank Tower,
              Millbank London SW1P 4QP (0345 015 4033 or www.ombudsman.org.uk).
              For complaints about private treatment: Dental Complaints Service,
              Stephenson House, 2 Cherry Orchard Road, Croydon CR0 6BA (08456
              120 540). General Dental Council, 37 Wimpole Street, London, W1M
              8DQ
            </p>
          </div>
        </details>
        <details>
          <summary class="accordion">Complaints policy</summary>

          <div class="accordionDrop">
            <p className="text-2xl	 font-bold	text-black my-8">
              Complaints handling policy Code of practice for complaints
            </p>
            <p className="text-xl my-8">
              In this practice, we take complaints seriously to ensure that our
              service meets expectations. All complaints are dealt with
              courteously and promptly to resolved the matter as quickly as
              possible.
            </p>
            <p className="text-xl mt-8">
              Our aim is to react to complaints and learn from every mistake
              that we make. We respond to any concerns in a caring and sensitive
              way.
            </p>
            <ol className="list-decimal p-10 text-xl">
              <li>
                <p>
                  The person responsible for dealing with any complaints about
                  the service that we provide is the Manager, our Complaints’
                  Manager.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If we receive a complaint by telephone or in person, we will
                  listen and offer to refer the individual to the Complaints’
                  Manager immediately. If the Complaints’ Manager is not
                  available at the time, we arrange a convenient time for the
                  Complaints’ Manager to contact the individual. The member of
                  staff will take brief details of the issue and pass it to the
                  Complaints’ Manager and provide the individual with a copy. If
                  the matter requires a more immediate response, we will arrange
                  for a senior member of the dental team to deal with it.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If we receive a complaint in writing or by e-mail, it will be
                  passed immediately to the Complaints’ Manager.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If a complaint is about any aspect of clinical care or
                  associated charges, it will usually be referred to the dentist
                  concerned, unless the individual does not want this to happen.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  We will acknowledge a complaint in writing and enclose a copy
                  of this code of practice as soon as possible, normally within
                  3 working days. We will offer to discuss the complaint with
                  the individual, and confirm how they would like to be kept
                  informed of developments – by telephone, letters or e-mail or
                  by face-to-face meetings. We will inform the individual about
                  how the complaint will be handled and the likely time that the
                  investigation will take to complete. If the individual does
                  not wish to discuss the complaint further, we will still
                  inform them of the expected timescale for completing the
                  investigation.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  We will seek to investigate the complaint within six months
                  and, as far as reasonably practicable, we will keep the
                  individual informed as to the progress of the investigation.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  When we have completed our investigation, we will provide the
                  individual with a full written report, which will include an
                  explanation of how we considered the complaint, the
                  conclusions reached in respect of each specific part of the
                  complaint, details of any necessary remedial action taken and
                  whether further action will be taken.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  Proper and comprehensive records will be kept of any
                  complaints received and the action we take. These records will
                  be reviewed regularly to ensure that we take every opportunity
                  to improve our service
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  If the individual making the complaint is not satisfied with
                  the result of our investigation, we will advise them to refer
                  the complaint to:
                </p>
              </li>
            </ol>
            <p className="text-xl mb-8">
              For complaints about NHS treatment: NHS England, PO Box 16738,
              Redditch B97 9PT (email: England.contactus@nhs.net); or The
              Parliamentary and Health Service Ombudsman, Millbank Tower,
              Millbank London SW1P 4QP (0345 015 4033 or www.ombudsman.org.uk).
              For complaints about private treatment: Dental Complaints Service,
              Stephenson House, 2 Cherry Orchard Road, Croydon CR0 6BA (08456
              120 540). General Dental Council, 37 Wimpole Street, London, W1M
              8DQ
            </p>
          </div>
        </details> */}

        <div className="mx-2">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg md:text-2xl font-bold text-[#157fb4]">
              - Pav Dental Practice Policy
            </h1>
            {policies?.map((policy) => (
              <a
                href={policy.href}
                download={policy.name}
                className="text-base font-bold w-max"
              >
                {policy.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 my-7">
            <h1 className="text-lg md:text-2xl font-bold text-[#157fb4]">
              - Pav Dental Consent Forms
            </h1>
            {consent?.map((item) => (
              <a
                href={item.href}
                download={item.name}
                className="text-base font-bold w-max"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 my-3">
            <h1 className="text-lg md:text-2xl font-bold text-[#157fb4]">
              - Pav Dental Post Operative Instructions
            </h1>
            {poig?.map((item) => (
              <a
                href={item.href}
                download={item.name}
                className="text-base font-bold w-max"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ParishDentalPracticePolicy;
