import React from "react";

type StepTitleProps = {
    number: number | string;
    children: React.ReactNode;
    id?: string;
};

export default function StepTitle({ number, children, id }: StepTitleProps) {
    return (
        <h2 id={id} className="step">
            <span className="step-circle">{number}</span>
            <span className="step-text">{children}</span>
        </h2>
    );
}