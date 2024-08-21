/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions - Concertpal.io",
    description: "Read the Terms and Conditions for ConcertPal LLC. By using our Chrome Extension or Website, you agree to be bound by our policies regarding API usage, third-party vendor interactions, and intellectual property. Stay informed about your rights and obligations while enjoying seamless access to concert information and ticketing services.",
};

const TermsAndConditions = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white p-8 font-sans text-black">
            <div className="max-w-[1100px]">
                <div className="mb-12 flex w-full items-center justify-center">
                    <Image src={logo} alt="ConcertPal Logo" width={100} height={100} />
                </div>
                <h1 className="mb-4 text-3xl font-bold">Terms and Conditions for ConcertPal LLC</h1>
                <p className="mb-2 text-gray-600">Last Updated: 8/8/2024</p>
                <p className="mb-4">Welcome to the ConcertPal Chrome Extension ("the Extension") and website ("the Website"). By accessing or using the Extension, you agree to be bound by these Terms and Conditions. Please read them carefully.</p>

                <h2 className="mb-2 text-2xl font-semibold">1. Acceptance of Terms</h2>
                <p className="mb-4">By using the Extension, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you must not use the Extension.</p>

                <h2 className="mb-2 text-2xl font-semibold">2. Description of the Extension</h2>
                <p className="mb-4">The Extension uses various ticket retailers’ APIs to find information on concerts and ticket pricing for the user.</p>

                <h2 className="mb-2 text-2xl font-semibold">3. Changes to Terms</h2>
                <p className="mb-4">We reserve the right to modify these Terms at any time. Any changes will be posted on this page and will take effect immediately upon posting. Your continued use of the Extension or the Website after any changes indicates your acceptance of the new Terms.</p>

                <h2 className="mb-2 text-2xl font-semibold">4. Privacy Policy</h2>
                <p className="mb-4">
                    Your privacy is important to us. Please review our{" "}
                    <Link href="/privacy-policy" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Privacy Policy</span>
                    </Link>
                    , which explains how we collect, use, and protect your information.
                </p>

                <h2 className="mb-2 text-2xl font-semibold">5. Use of TicketMaster API</h2>
                <p className="mb-4">
                    The Extension uses the Ticketmaster API to access and display data. By using the Extension, you agree to be bound by TicketMaster’s{" "}
                    <Link href="https://www.ticketmaster.com/legal/purchase.html" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Terms of use</span>
                    </Link>{" "}
                    and{" "}
                    <Link href="https://www.ticketmaster.com/privacy" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Privacy Policy</span>
                    </Link>
                    .
                </p>

                <h3 className="mb-2 text-xl font-semibold">5.1 Scope of TicketMaster API Usage</h3>
                <p className="mb-4">
                    The Extension uses Ticketmaster API to:
                    <ul className="ml-4 list-inside list-disc">
                        <li>Find upcoming concerts based on your search criteria and geography.</li>
                        <li>Retrieve pricing information for relevant concerts.</li>
                        <li>Display relevant concert information and ticket links.</li>
                    </ul>
                </p>

                <h3 className="mb-2 text-xl font-semibold">5.2 Limitation of Liability</h3>
                <p className="mb-4">We are not responsible for any issues arising from the use of TicketMaster’s services, including but not limited to data accuracy, availability, and any changes to TicketMaster’s API.</p>

                <h2 className="mb-2 text-2xl font-semibold">6. Use of SeatGeek API</h2>
                <p className="mb-4">
                    The Extension uses the SeatGeek API to access and display data. By using the Extension, you agree to be bound by SeatGeek’s{" "}
                    <Link href="https://seatgeek.com/terms" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Terms of use</span>
                    </Link>{" "}
                    and{" "}
                    <Link href="https://seatgeek.com/privacy" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Privacy Policy</span>
                    </Link>
                    .
                </p>

                <h3 className="mb-2 text-xl font-semibold">6.1 Scope of SeatGeek API Usage</h3>
                <p className="mb-4">
                    The Extension uses SeatGeek API to:
                    <ul className="ml-4 list-inside list-disc">
                        <li>Find upcoming concerts based on your search criteria and geography.</li>
                        <li>Retrieve pricing information for relevant concerts.</li>
                        <li>Display relevant concert information and ticket links.</li>
                    </ul>
                </p>

                <h3 className="mb-2 text-xl font-semibold">6.2 Limitation of Liability</h3>
                <p className="mb-4">We are not responsible for any issues arising from the use of SeatGeek’s services, including but not limited to data accuracy, availability, and any changes to SeatGeek’s API.</p>

                <h2 className="mb-2 text-2xl font-semibold">7. Use of VividSeats API</h2>
                <p className="mb-4">
                    The Extension uses the VividSeats API to access and display data. By using the Extension, you agree to be bound by VividSeats’{" "}
                    <Link href="https://www.vividseats.com/terms-and-policies/" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Terms of use</span>
                    </Link>{" "}
                    and{" "}
                    <Link href="https://www.vividseats.com/terms-and-policies/" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Privacy Policy</span>
                    </Link>
                    .
                </p>

                <h3 className="mb-2 text-xl font-semibold">7.1 Scope of VividSeats API Usage</h3>
                <p className="mb-4">
                    The Extension uses VividSeats API to:
                    <ul className="ml-4 list-inside list-disc">
                        <li>Find upcoming concerts based on your search criteria and geography.</li>
                        <li>Retrieve pricing information for relevant concerts.</li>
                        <li>Display relevant concert information and ticket links.</li>
                    </ul>
                </p>

                <h3 className="mb-2 text-xl font-semibold">7.2 Limitation of Liability</h3>
                <p className="mb-4">We are not responsible for any issues arising from the use of VividSeats’ services, including but not limited to data accuracy, availability, and any changes to VividSeats’ API.</p>

                <h2 className="mb-2 text-2xl font-semibold">8. Use of StubHub API</h2>
                <p className="mb-4">
                    The Extension uses the StubHub API to access and display data. By using the Extension, you agree to be bound by StubHub’s{" "}
                    <Link href="https://www.stubhub.com/legal/?section=terms" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Terms of use</span>
                    </Link>{" "}
                    and{" "}
                    <Link href="https://www.stubhub.com/legal/?section=privacy" className="text-blue-500 underline">
                        <span className="cursor-pointer text-blue-500 underline">Privacy Policy</span>
                    </Link>
                    .
                </p>

                <h3 className="mb-2 text-xl font-semibold">8.1 Scope of StubHub API Usage</h3>
                <p className="mb-4">
                    The Extension uses StubHub API to:
                    <ul className="ml-4 list-inside list-disc">
                        <li>Find upcoming concerts based on your search criteria and geography.</li>
                        <li>Retrieve pricing information for relevant concerts.</li>
                        <li>Display relevant concert information and ticket links.</li>
                    </ul>
                </p>

                <h3 className="mb-2 text-xl font-semibold">8.2 Limitation of Liability</h3>
                <p className="mb-4">We are not responsible for any issues arising from the use of StubHub’s services, including but not limited to data accuracy, availability, and any changes to StubHub’s API.</p>

                <h2 className="mb-2 text-2xl font-semibold">9. Ticket Purchases</h2>
                <p className="mb-4">The Extension provides links to third-party ticket vendors. We do not sell tickets directly and are not responsible for any issues related to ticket purchases, including but not limited to pricing, availability, and the fulfillment of ticket purchases. All ticket purchases are subject to the terms and conditions of the respective third-party vendor.</p>

                <h2 className="mb-2 text-2xl font-semibold">10. User Obligations</h2>
                <p className="mb-4">
                    You agree to:
                    <ul className="ml-4 list-inside list-disc">
                        <li>Use the Extension only for lawful purposes.</li>
                        <li>Not misuse the Extension or interfere with its normal operation.</li>
                        <li>Comply with all applicable laws and regulations.</li>
                    </ul>
                </p>

                <h2 className="mb-2 text-2xl font-semibold">11. Intellectual Property</h2>
                <p className="mb-4">All content and materials available through the Extension, including but not limited to text, graphics, logos, and software, are the property of ConcertCal LLC or its licensors and are protected by intellectual property laws.</p>

                <h2 className="mb-2 text-2xl font-semibold">12. Termination</h2>
                <p className="mb-4">We reserve the right to terminate or suspend your access to the Extension at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests.</p>

                <h2 className="mb-2 text-2xl font-semibold">13. Disclaimer of Warranties</h2>
                <p className="mb-4">The Extension is provided " as is " and " as available " without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

                <h2 className="mb-2 text-2xl font-semibold">14. Limitation of Liability</h2>
                <p className="mb-4">
                    In no event shall ConcertCal LLC be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                    <ul className="ml-4 list-inside list-disc">
                        <li>Your use or inability to use the Extension.</li>
                        <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
                        <li>Any interruption or cessation of transmission to or from the Extension.</li>
                        <li>Any issues arising from third-party ticket vendors.</li>
                    </ul>
                </p>

                <h2 className="mb-2 text-2xl font-semibold">15. Governing Law</h2>
                <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the relevant jurisdiction, without regard to its conflict of law principles.</p>

                <h2 className="mb-2 text-2xl font-semibold">16. Contact Information</h2>
                <p className="mb-4">
                    If you have any questions about these Terms, please contact us at{" "}
                    <a href="mailto:spotcalendars@gmail.com" className="text-blue-500 underline">
                        spotcalendars@gmail.com
                    </a>
                    .
                </p>

                <p className="mb-4">
                    ConcertCal LLC
                    <br />
                    308 Hicks Street, Brooklyn, NY 11201
                    <br />
                    <a href="mailto:spotcalendars@gmail.com" className="text-blue-500 underline">
                        spotcalendars@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
