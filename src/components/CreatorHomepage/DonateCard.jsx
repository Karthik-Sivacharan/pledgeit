import React from "react";

class DonateCard extends React.Component {

    state = {
        donationAmount: 2500,
      }
    
      NameChangeHandler = (event) => {
        this.setState({donationAmount: Math.round(event.target.value * 100)});
      }


    render() {
        return (
            <div className="course-card-trailer uk-sticky" uk-sticky="top: 10 ;offset:105 ; media: @m ; bottom:true">
                <ul className="uk-child-width-expand uk-tab" uk-switcher="animation: uk-animation-fade">
                    <li className="uk-active"><a href="#" aria-expanded="true">Donate</a></li>
                    <li><a href="#" aria-expanded="false">Membership</a></li>
                </ul>
                <ul className="uk-switcher">
                    {/* tab 1 */}
                    <li className="uk-active">
                        <div className="p-3">
                            <div className="my-3 text-center">
                                <div className="uk-grid-small uk-grid uk-grid-stack" uk-grid="true">
                                    <div className="uk-width-1-3 uk-grid-margin uk-first-column">
                                        <div className="uk-width-1-1@s uk-flex uk-flex-middle"> <input className="uk-input" type="number" placeholder="25" style={{ marginBottom: '0px' }} onChange={this.NameChangeHandler}/> </div>
                                    </div>

                                    <div className="uk-width-1-3 uk-grid-margin uk-first-column uk-flex uk-flex-middle">
                                        <span className="uk-h4"> x 100 &nbsp; = </span>
                                    </div>

                                    <div className="uk-width-1-3 uk-grid-margin uk-first-column uk-flex uk-flex-middle">
                                        <span className="uk-h2" style={{ marginRight: '2px' }}> ₹{this.state.donationAmount} </span>
                                    </div>
                                </div>
                                {/* <s className="uk-h4 text-muted"> $19.99 </s>
                                <s className="uk-h6 ml-1 text-muted"> $32.99 </s> */}
                            </div>
                            <form className="mt-3">
                                <div className="uk-margin"> <textarea className="uk-textarea" rows="1" placeholder="Leave a personal note!"></textarea> </div>
                                <input type="submit" defaultValue="Donate Now" className="btn btn-default  btn-block mt-3" />
                            </form>
                            <p className="uk-text-bold"> This Course Incluce </p>
                            <div className="uk-child-width-1-2 uk-grid-small uk-grid uk-grid-stack" uk-grid="true">
                                <div className="uk-first-column">
                                    <span><i className="uil-youtube-alt" /> 28 hours video</span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-award" /> Certificate </span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-file-alt" /> 12 Article </span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-video" /> Watch Offline </span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-award" /> Certificate </span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-clock-five" /> Lifetime access </span>
                                </div>
                            </div>
                        </div>
                        <div className="uk-sticky-placeholder" hidden style={{ height: '735px', margin: '0px' }} />
                    </li>
                    {/* tab 2 */}
                    <li>
                        <div className="p-3">
                            <div className="text-center">
                                <div className="pricing-plan-label billed-monthly-label text-center"><strong>₹500</strong>/ monthly
                                </div>
                            </div>
                            {/* <p> ! Hour Left This price</p> */}
                            <form className="mt-3">
                                <div className="uk-margin"> <textarea className="uk-textarea" rows="1" placeholder="Leave a personal note!"></textarea> </div>
                                <input type="submit" defaultValue="Donate Now" className="btn btn-default  btn-block mt-3" />
                            </form>
                            <p className="uk-text-bold"> This Course Incluce </p>
                            <div className="uk-child-width-1-2 uk-grid-small uk-grid uk-grid-stack" uk-grid="true">
                                <div className="uk-first-column">
                                    <span><i className="uil-youtube-alt" /> 28 hours video</span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-award" /> Certificate </span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-file-alt" /> 12 Article </span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-video" /> Watch Offline </span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-award" /> Certificate </span>
                                </div>
                                <div className="uk-grid-margin uk-first-column">
                                    <span> <i className="uil-clock-five" /> Lifetime access </span>
                                </div>
                            </div>
                        </div>
                        <div className="uk-sticky-placeholder" hidden style={{ height: '735px', margin: '0px' }} />
                    </li>
                </ul>
            </div>
        );
    }
}

export default DonateCard;


