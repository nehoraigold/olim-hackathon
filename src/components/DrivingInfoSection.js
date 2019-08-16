import React from "react";
import {PageHeader} from "antd";
import {connect} from "react-redux";
import moment, {isMoment} from "moment";

require('moment');

const DrivingInfoSection = ({user, benefits}) => {
    const startsWithVowel = text => {
        return ['a', 'e', 'i', 'o', 'u'].some(letter => letter === text.charAt(0).toLowerCase());
    };

    const returnWordWithArticle = text => {
        return startsWithVowel(text) ? `an ${text}` : `a ${text}`;
    };

    let doa = moment(user.date_of_arrival);
    let today = moment();

    let years = today.year() - doa.year();
    if (doa.dayOfYear() > today.dayOfYear()) {
        years--;
    }

    const yearsLeft = 5 - years;
    return (
        <div className="section driving-info-section">
            <PageHeader title={<h3>Driving Information</h3>}/>
            {benefits.some(benefit => benefit.id === "transfer_foreign_license") ?
                <div>
                    <h4 className="driving-title information">Transferring Your Foreign Driver's License</h4>
                    <p className="driving-description information">
                        You have {yearsLeft} years to transfer your foreign license into an Israeli one.
                    </p>
                    <br/>
                    <p className="driving-description information">
                        In order to transfer your license, you need to visit an optician and have them fill out a
                        Tofes Yarok (green form). Issta and Femi-Premium are two private companies who provide services
                        for Misrad Harishui. Click below for a listing of opticians around Israel who are affiliated
                        with
                        Issta or Femi-Premium, or phone: Femi-Premium: 03-953-5656 When you visit the optician,
                        make sure to bring your Teudat Zehut.
                    </p>
                    <br/>
                    <a href={"https://myvisit.com/#!/home/signin/"} className="driving-description information" target={"_blank"}> Make an appointment</a>(not required, but recommended)
                    <br/>
					<br/>
                    <a href={"https://www.nbn.org.il/aliyahpedia/government-services/government-office-locations/misrad-harishui-branches/"} className="driving-description information" target={"_blank"}> List of offices</a>
                    <br/>
					<br/>
					<h4 className="driving-title information">Required Documents:</h4>
                    <ul className="driving-description information">
                        <li>Tofes Yarok</li>
                        <li>Teudat Zehut</li>
                        <li>Teudat Oleh / Teudat Zakaut</li>
                        <li>Valid foreign driver’s license and a copy (front and back) of your license</li>
                        <li>Proof of having a full foreign license for 5 years immediately preceding the date of your
                            Aliyah (this could be the issue date on your license or a transcript of your driving history
                            from your local DMV)
                        </li>
                    </ul>
					<br/>
                    <p className="driving-description information">
                        You will receive a temporary license which will be valid for 6 months. Within 2-3 months of
                        issuing your temporary license you will be mailed a permanent driver’s license card. Bring your
                        temporary license to the Post office and pay the fee (438 NIS). NOTE: Most post offices will not
                        accept credit cards or checks. You can also pay over the phone at *5678 or at any of the
                        Automated Licensing Machines around the country. If you choose to use an Automated
                        Licensing Machine, you can only do so using a credit card that holds the name of the licensed
                        individual.

                        It may take up to 3 months to receive your permanent license by mail. If after 3 months you have
                        still not received your license in the mail, call the Misrad Harishui License Delivery
                        department at 08-994-9700.
                    </p>
                    <br/>
                </div> : null}
            <h4 className="driving-title information">Buying or Importing a Car</h4>
            <p className="driving-description information">
                As {returnWordWithArticle(user.national_status)}, you have {``}
                left to take advantage of purchasing a new car in Israel or importing one
                from abroad. Olim receive a ___ tax break...
            </p>
        </div>

    )
};

const mapStateToProps = state => {
    return {
        user: state.user,
        benefits: state.benefits
    }
};

const mapDispatchToProps = dispatch => {
    return {};
};

const DrivingInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(DrivingInfoSection);

export default DrivingInfo;