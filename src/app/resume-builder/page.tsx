"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";

export const metadata = {
  title: "Speed Wings Resume Builder",
  description:
    "Speed Wings Resume Builder allows everyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, Speed Wings Resume Builder and Parser also provides a resume parser to help test and confirm its ATS readability.",
};

export default function Create() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gray-50">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-3">
            <ResumeForm />
          </div>
          <div className="col-span-3">
            <Resume />
          </div>
        </div>
      </main>
    </Provider>
  );
}
