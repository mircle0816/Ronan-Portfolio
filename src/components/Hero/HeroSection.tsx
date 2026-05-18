import ReactMarkdown from "react-markdown";
// types
import { CTAContainerProps } from "components/Buttons/CTAContainer";
// components
import Button from "components/Buttons/Button";
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";

export interface HeroSectionProps {
  /**
   * The main heading
   */
  heading: string;
  /**
   * The sub-headline
   */
  subHeading: string;
  /**
   * A collection of CTA-buttons
   */
  callToActions: CTAContainerProps[];
}

const HeroSection = ({ heading, subHeading, callToActions }: HeroSectionProps) => {
  const renderCallToActions = () =>
    callToActions?.[0]?.callToActions?.map(
      ({ ctaType, icon, id, isExternalLink, linkUrl, title }) =>
        ctaType === "primary" ? (
          <span key={id} className="relative inline-flex">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-lg bg-primary opacity-30" />
            <Button
              text={title}
              type={ctaType}
              as="a"
              iconUrl={icon?.url}
              isExternalLink={isExternalLink}
              url={linkUrl}
              className="text-sm px-6"
            />
          </span>
        ) : (
          <Button
            key={id}
            text={title}
            type={ctaType}
            as="a"
            iconUrl={icon?.url}
            isExternalLink={isExternalLink}
            url={linkUrl}
            className="text-sm"
          />
        ),
    );

  return (
    <section className="lg:relative overflow-hidden" aria-label={heading}>
      <div className="mx-auto max-w-7xl w-full pt-12 md:pt-16 pb-12 md:pb-20 text-center lg:py-48 lg:text-right lg:ml-auto">
        <div className="relative px-4 lg:w-1/2 sm:px-8 xl:pl-16 lg:ml-auto">
          <h2
            className="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl fade-in-left"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <div className="mt-8 max-w-md mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:max-w-3xl fade-in-left offset-1">
            <ReactMarkdown>{subHeading}</ReactMarkdown>
          </div>
          <div className="mt-8 sm:flex sm:justify-center lg:justify-end space-y-4 sm:space-x-6 sm:space-y-0 fade-in-left offset-2">
            {renderCallToActions()}
          </div>
          <BackgroundPatternWrapper>
            <BackgroundPattern positionClassName="-z-10 left-full transform translate-x-12 -translate-y-4 scale-150" />
          </BackgroundPatternWrapper>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:h-full overflow-hidden lg:rounded-r-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1605818215588-c8013661b021?auto=format&fit=crop&w=1920&q=80"
          alt="developer workspace"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
        />
      </div>
    </section>
  );
};

export default HeroSection;
