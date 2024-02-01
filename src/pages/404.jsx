import * as React from "react";
import Layout from "@layout";
import Button from "@ui/button";

// markup
const NotFoundPage = () => {
    return (
        <Layout pageTitle="404: Error Not Found">
            <div className="error-area">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-10">
                            <h1 className="title">404!</h1>
                            <h3 className="sub-title">صفحه یافت نشد</h3>
                            <p>
                                صفحه ای که به دنبال آن بودید نمی تواند یافت شود
                            </p>
                            <Button path="/">بازگشت به خانه</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
