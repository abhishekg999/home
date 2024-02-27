import { ReactNode } from "preact/compat";

interface ExperienceCardProps {
    jobTitle: string;
    companyName: string;
    jobDescription: ReactNode;
    skills: string;
    startDate: string;
    endDate?: string;
}

const ExperienceCardPropsDefault: ExperienceCardProps = {
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    skills: "",
    startDate: "",
    endDate: "Present"
}

export function ExperienceCard(props: ExperienceCardProps) {
    const data = {
        ...ExperienceCardPropsDefault,
        ...props
    };
    const { jobTitle, companyName, jobDescription, skills, startDate, endDate } = data;

    return (
        <div className="grid gap-4 border-2 rounded-lg p-2">
            <div className="grid gap-1">
                <h3 className="text-xl font-bold">{jobTitle}</h3>
                <h2>{companyName}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {jobDescription}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    Skills: <span className="text-white">{skills}</span>
                </div>
            </div>
            <div className="flex items-start justify-end">
                <div className="grid gap-1 text-right text-sm">
                    <p className="font-medium">{startDate} - {endDate}</p>
                </div>
            </div>
        </div>
    );
}
