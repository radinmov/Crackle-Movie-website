import { Fragment } from "react";

export default function Button(props) {
    const {
        children,
        className,
        size = "medium"
    }=props;
    function renderFarm() {
        if (icon) {
            return (
                <div className="flex align-center gap-5">
                    <span>
                        <i className={icon} />
                    </span>
                    <span>{children}</span>
                </div>
            )
        } else {
            return <Fragment>{children}</Fragment>
        }
    }
    return  

}