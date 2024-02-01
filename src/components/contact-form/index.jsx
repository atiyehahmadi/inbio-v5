import React, { useState } from "react";
import axios from "axios";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import cn from "classnames";
import {
    FormGroup,
    Label,
    Input,
    Textarea,
    ErrorText,
} from "@ui/form-elements";
import Button from "@ui/button";

const ContactForm = ({ className, url }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        });
        if (ok) {
            form.reset();
        }
    };
    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: url,
            data,
        })
            .then((res) => {
                console.log();
                handleServerResponse(true, "Thanks! for being with us", form);
            })
            .catch((err) => {
                handleServerResponse(false, err.response.data.error, form);
            });
    };

    return (
        <div className={cn("contact-form-wrapper", className)}>
            <div className="introduce">
                <form
                    className="rnt-contact-form rwt-dynamic-form row"
                    id="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="col-lg-6">
                        <FormGroup>
                            <Label htmlFor="name">اسم شما</Label>
                            <Input
                                name="name"
                                id="name"
                                type="text"
                                {...register("name", {
                                    required: "نام مورد نیاز است",
                                })}
                            />
                            {errors.name && (
                                <ErrorText>{errors.name?.message}</ErrorText>
                            )}
                        </FormGroup>
                    </div>

                    <div className="col-lg-6">
                        <FormGroup>
                            <Label htmlFor="phone">شماره تلفن</Label>
                            <Input
                                name="phone"
                                id="phone"
                                type="text"
                                {...register("phone", {
                                    required: "تلفن مورد نیاز است",
                                })}
                            />
                            {errors.phone && (
                                <ErrorText>{errors.phone?.message}</ErrorText>
                            )}
                        </FormGroup>
                    </div>

                    <div className="col-lg-12">
                        <FormGroup>
                            <Label htmlFor="email">پست الکترونیک</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                {...register("email", {
                                    required: "ایمیل مورد نیاز است",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "iآدرس ایمیل نامعتبر است",
                                    },
                                })}
                            />
                            {errors.email && (
                                <ErrorText>{errors.email?.message}</ErrorText>
                            )}
                        </FormGroup>
                    </div>

                    <div className="col-lg-12">
                        <FormGroup>
                            <Label htmlFor="subject">موضوع</Label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                {...register("subject", {
                                    required: "موضوع مورد نیاز است",
                                })}
                            />
                            {errors.subject && (
                                <ErrorText>{errors.subject?.message}</ErrorText>
                            )}
                        </FormGroup>
                    </div>

                    <div className="col-lg-12">
                        <FormGroup>
                            <Label htmlFor="message">پیغام تو</Label>
                            <Textarea
                                name="message"
                                id="message"
                                {...register("message", {
                                    required: "پیام مورد نیاز است",
                                })}
                            ></Textarea>
                            {errors.message && (
                                <ErrorText>{errors.message?.message}</ErrorText>
                            )}
                        </FormGroup>
                    </div>

                    <div className="col-lg-12">
                        <Button type="submit">
                            <span>پیام فرستادن</span>
                            <ArrowLeft />
                        </Button>
                        {serverState.status && (
                            <p
                                className={`mt-4 font-14 ${
                                    !serverState.status.ok
                                        ? "text-red"
                                        : "text-success"
                                }`}
                            >
                                {serverState.status.msg}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

ContactForm.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string,
};

export default ContactForm;
