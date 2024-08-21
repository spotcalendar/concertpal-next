import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy - Concertpal.io",
    description: "Explore the Privacy Policy of ConcertPal LLC. By using our Chrome Extension or Website, you agree to adhere to our policies regarding API usage, third-party vendor interactions, and intellectual property. Stay informed about your rights and obligations while enjoying seamless access to concert information and ticketing services.",
};
const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white p-8 font-sans text-black">
            <div className="max-w-[1100px]">
                <div className="mb-12 flex w-full items-center justify-center">
                    <Image src={logo} alt="ConcertPal Logo" width={100} height={100} />
                </div>
                <h1 className="mb-4 text-3xl font-bold">Privacy Notice</h1>
                <p className="mb-4 text-sm">Last updated August 8, 2024</p>
                <section className="mb-6">
                    <p className="mb-4">Thank you for choosing to be part of our community at ConcertPal (“Company”, “ConcertPal”, “Concert Pal”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our notice, or our practices with regards to your personal information, please contact us at spotcalendars@gmail.com.</p>
                    <p className="mb-4">When you visit our website ConcertPal.io or browser extension, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Sites and our services.</p>

                    <p className="mb-4">This privacy notice applies to all information collected through our website such as ConcertPal.io, and/or any related services, browser extension, sales, marketing or events we refer to them collectively in this privacy notice as the &quot;Services&quot;</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">1. Information Automatically Collected</h2>
                    <p className="mb-4">Some information — such as IP address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
                    <p className="mb-4">We automatically collect certain anonymized information such as your IP address, browser and device characteristics, device type, country, location, information about when you use our Services, and other technical information either directly or using Google Analytics. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                    <p className="mb-4">We collect anonymized information (artist, venue, price, dates, etc.) when you visit a website like Ticketmaster, Stubhub, SeatGeek, etc. No information is traced back to specific users and is only used to speed up results next time someone visits the same product or makes the same search.</p>
                    <p className="mb-4">We use Google Analytics to track user counts and demographic information.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">2. How Do We Use Your Information?</h2>
                    <p className="mb-4">We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
                    <p className="mb-4">
                        We use personal information collected via our Services for the purposes described below:
                        <ul className="ml-4 list-inside list-disc">
                            <li>To enforce our terms, conditions, and policies for business purposes, legal reasons, and contractual requirements.</li>
                            <li>To respond to legal requests and prevent harm.</li>
                            <li>To deliver services to the user.</li>
                            <li>For other business purposes like data analysis, identifying usage trends, and improving our services.</li>
                        </ul>
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">3. Will Your Information Be Shared With Anyone?</h2>
                    <p className="mb-4">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                    <p className="mb-4">
                        We may process or share data based on the following legal basis:
                        <ul className="ml-4 list-inside list-disc">
                            <li>
                                <strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information in a specific purpose.
                            </li>
                            <li>
                                <strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                            </li>
                            <li>
                                <strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, or situations involving potential threats to the safety of any person and illegal activities.
                            </li>
                        </ul>
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">4. Do We Use Cookies and Other Tracking Technologies?</h2>
                    <p className="mb-4">We use tracking technologies like Google Analytics to determine user counts and demographic information.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">5. How Long Do We Keep Your Information?</h2>
                    <p className="mb-4">We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
                    <p className="mb-4">No purpose in this policy will require us keeping your personal information for longer than 2 years. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">6. How Do We Keep Your Information Safe?</h2>
                    <p className="mb-4">We aim to protect your personal information through a system of organizational and technical security measures. However, please remember that we cannot guarantee that the internet itself is 100% secure.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">7. Do We Collect Information from Minors?</h2>
                    <p className="mb-4">We do not knowingly collect data from or market to children under 18 years of age. If you become aware of any data we have collected from children under age 18, please contact us at spotcalendars@gmail.com.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">8. What Are Your Privacy Rights?</h2>
                    <p className="mb-4">You may review, change, or terminate your account at any time. If you are a resident in the European Economic Area, you have the right to complain to your local data protection supervisory authority.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">9. Controls for Do-Not-Track Features</h2>
                    <p className="mb-4">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. As no uniform technology standard for recognizing and implementing DNT signals has been finalized, we do not currently respond to DNT browser signals.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">10. Do California Residents Have Specific Privacy Rights?</h2>
                    <p className="mb-4">Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information. California Civil Code Section 1798.83 permits our users who are California residents to request and obtain information about categories of personal information disclosed to third parties for direct marketing purposes.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">11. Do We Make Updates to This Policy?</h2>
                    <p className="mb-4">Yes, we will update this policy as necessary to stay compliant with relevant laws. We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and will be effective as soon as it is accessible.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">12. How Can You Contact Us About This Policy?</h2>
                    <p className="mb-4">If you have questions or comments about this policy, you may email us at spotcalendars@gmail.com.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">13. Links and Information Shown on This Website and Browser Extension</h2>
                    <p className="mb-4">All the information on our website and browser extension comes from ticketing and retail websites themselves. We may receive commissions for purchases made through some of the links at companies partnered with us on the site.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">14. How Can You Review, Update, or Delete the Data We Collect from You?</h2>
                    <p className="mb-4">Based on the laws of some countries, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please reach out to us at spotcalendars@gmail.com.</p>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-2xl font-semibold">15. Partnerships and Services</h2>
                    <p className="mb-4">We may use Hotjar on the ConcertPal.io main website in order to better understand our users’ needs and to optimize this service and experience. Hotjar is a technology service that helps us better understand our users’ experience (e.g., how much time they spend on which pages, which links they choose to click, what users do and don’t like, etc.) and this enables us to build and maintain our service with user feedback.</p>
                    <p className="mb-4">Hotjar uses cookies and other technologies to collect data on our users’ behavior and their devices. This includes a device&apos;s IP address (processed during your session and stored in a de-identified form), device screen size, device type (unique device identifiers), browser information, geographic location (country only), and the preferred language used to display our website. Hotjar stores this information on our behalf in a pseudonymized user profile. Hotjar is contractually forbidden to sell any of the data collected on our behalf.</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
