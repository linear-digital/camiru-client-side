import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import React from 'react';

const General = () => {

    const [open, setOpen] = React.useState(1);
    return (
        <div className='w-full grid grid-cols-2 gap-x-20 px-20'>
            <AccordionUseble number={1} open={open} setOpen={setOpen}
                title={"What services does Camiru Offer?"}
            />
            <AccordionUseble number={2} open={open} setOpen={setOpen}
                title={"What will be delivered? And When?"}
            />
            <AccordionUseble number={3} open={open} setOpen={setOpen}
                title={"Why should i choose a Design studio like TanahAir over full-service agency?"}
            />
            <AccordionUseble number={4} open={open} setOpen={setOpen}
                title={"What often will results be reported?"}
            />
            <AccordionUseble number={5} open={open} setOpen={setOpen}
                title={"How does camiru create website content without knowing our Business plan?"}
            />
            <AccordionUseble number={6} open={open} setOpen={setOpen}
                title={"How Quickly will i start seeing result after working with Camiru?"}
            />
        </div>
    );
};

export default General;

const AccordionUseble = ({ number, open, setOpen, title }) => {

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div>
            <Accordion open={open === number} icon={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6836 2.67188C6.60563 2.67188 2.48438 6.79313 2.48438 11.8711C2.48438 16.9491 6.60563 21.0703 11.6836 21.0703C16.7616 21.0703 20.8828 16.9491 20.8828 11.8711C20.8828 6.79313 16.7616 2.67188 11.6836 2.67188ZM11.3616 14.3089L8.79504 11.7423C8.50066 11.4479 8.70305 10.9512 9.11701 10.9512H14.2594C14.6733 10.9512 14.8757 11.4479 14.5813 11.7331L12.0148 14.2997C11.8308 14.4837 11.5364 14.4837 11.3616 14.3089Z" fill="#187A82" />
            </svg>}>
                <AccordionHeader onClick={() => handleOpen(number)} className='border-none'>
                    <h1 className="text-cyan-700 text-sm font-normal leading-snug">
                        {title}
                    </h1>
                </AccordionHeader>
                <AccordionBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus autem numquam officia pariatur perspiciatis, incidunt qui ullam iste reiciendis voluptatibus.
                    </p>
                </AccordionBody>
            </Accordion>
        </div>
    );
}