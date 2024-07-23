import { forwardRef } from "react";

import * as Accordion from "@radix-ui/react-accordion";

import "./Filters.css";

const AccordionTrigger = forwardRef(function AccordionTrigger(
  { children, ...props },
  forwardedRef
) {
  return (
    <Accordion.Header style={{ display: "flex", margin: "0" }}>
      <Accordion.Trigger
        className={"styled-accordion-trigger"}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  );
});

const AccordionContent = forwardRef(function AccordionContent(
  { children, ...props },
  forwardedRef
) {
  return (
    <Accordion.Content
      className={"styled-accordion-content"}
      {...props}
      ref={forwardedRef}
    >
      <div>{children}</div>
    </Accordion.Content>
  );
});

export function Filters() {
  return (
    <div className={"filters-container"}>
      <div className={"card-title"}>Filters</div>
      <Accordion.Root type="multiple" className="accordion-root">
        <Accordion.Item className="accordion-item" value={"createdBy"}>
          <AccordionTrigger>Created by</AccordionTrigger>
          <AccordionContent>
            <div> content</div>
            <div> content</div>
            <div> content</div>
            <div> content</div>
            <div> content</div>
            <div> content</div>
            <div> content</div>
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
