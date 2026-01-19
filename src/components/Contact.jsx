import AnimatedTitle from './AnimatedTitle'
import Button from './Button'

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
)

const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative flex flex-col items-center justify-center rounded-lg bg-black h-[80vh] py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-[10%] -top-[1%] hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-[20vw]">
                    <ImageClipBox
                        src="/img/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                </div>

                <div className="absolute -left-[10%] -bottom-[0%] hidden w-60 sm:block lg:left-20 lg:w-[20vw]">
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        clipClass="contact-clip-path-2 "
                    />
                </div>

                <div className="absolute -top-[13%] left-[10%] w-60 sm:top-1/2 md:left-auto md:right-[7%] lg:top-[20%] lg:w-[18vw]">
                    <ImageClipBox
                        src="/img/swordman.webp"
                        clipClass=" sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-[10px] uppercase">
                        Join Zentry
                    </p>

                    <p className="special-font md:text-[5vw] w-full font-zentry font-black leading-[.9]">
                        let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether.
                    </p>

                    <Button title="contact us" containerClass="mt-10 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Contact
