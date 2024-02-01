import React from "react";
import Anchor from "@ui/anchor";
import { ExternalLink } from "react-feather";
import { StaticImage } from "gatsby-plugin-image";

const DarkDemo = () => {
    return (
        <div className="content">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner badge-1">
                            <div className="thumbnail">
                                <Anchor path="/">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/designer-two.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/">پیشنمایش اصلی</Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/main-demo.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/">پیشنمایش اصلی</Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-technician">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/index-technician.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-technician">
                                        تکنسین
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-model">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/home-model-v2.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-model">مدل</Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-consulting">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/home-consulting.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-consulting">
                                        مشاور
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-fashion-designer">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/fashion-designer.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-fashion-designer">
                                        طراح مد
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-developer">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/developer.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-developer">
                                        توسعه دهنده
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-instructor-fitness">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/instructor-fitness.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-instructor-fitness">
                                        مربی فیتنس
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-web-developer">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/home-model.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-web-developer">
                                        توسعه دهنده وب
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-designer">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/home-video.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-designer">طراح</Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-content-writer">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/text-rotet.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-content-writer">
                                        نویسنده محتوا
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-instructor">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/index-boxed.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-instructor">
                                        مربی
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-freelencer">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/home-sticky.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-freelencer">
                                        فریلنسر
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-photographer">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/index-bg-image.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-photographer">
                                        عکاس
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo">
                        <div className="inner">
                            <div className="thumbnail">
                                <Anchor path="/index-politician">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/front-end.png"
                                        alt="نمونه کار شخصی"
                                    />
                                    <span className="overlay-content">
                                        <span className="overlay-text">
                                            مشاهده پیشنمایش{" "}
                                            <ExternalLink size={16} />
                                        </span>
                                    </span>
                                </Anchor>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <Anchor path="/index-politician">
                                        سیاستمدار
                                    </Anchor>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-demo coming-soon">
                        <div className="inner">
                            <div className="thumbnail">
                                <a href="#!">
                                    <StaticImage
                                        className="w-100"
                                        src="../../assets/images/demo/coming-soon.png"
                                        alt="نمونه کار شخصی"
                                    />
                                </a>
                            </div>
                            <div className="inner">
                                <h3 className="title">
                                    <a href="#!">حسابدار</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DarkDemo;
