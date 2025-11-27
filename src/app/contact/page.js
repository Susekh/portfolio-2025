import React from "react";
import { forms, seo } from "@/data/data";

export const metadata = {
    title: `Contact Me | ${seo.title}`,
    description: "Get in touch with me to discuss projects, collaborations, or just to say hello.",
    keywords: "contact, get in touch, collaboration, email, message, web developer"
};

function Contact() {
    return (
        <>
            <div className="md:w-[700px] w-[100%] mt-5 p-4">
                <main className="flex flex-col gap-4">
                    <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                        Contact Me
                    </h1>
                    <div className="p-1">
                        <form
                            action={forms.formspreeUrl}
                            method="POST"
                            className="flex flex-col gap-4"
                        >
                            <div>
                                <label htmlFor="name" className="uppercase text-sm text-base-content/80 font-bold">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/30 text-base-content focus:border-base-content transition-colors duration-200"
                                    type="text"
                                    name="name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="uppercase text-sm text-base-content/80 font-bold">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/30 text-base-content focus:border-base-content transition-colors duration-200"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="uppercase text-sm text-base-content/80 font-bold">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/30 text-base-content focus:border-base-content transition-colors duration-200 min-h-[120px] resize-y"
                                    name="message"
                                    required
                                ></textarea>
                            </div>
                            <div className="mt-2">
                                <button 
                                    type="submit"
                                    className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 cursor-pointer hover:bg-base-content/90 rounded-lg w-full focus:outline-none transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Contact;