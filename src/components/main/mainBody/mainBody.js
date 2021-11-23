import React, {Component} from "react";
import "./mainBody.css"
import WeekendNews from "../newsForms/weekendNews";
import SecondNews from "../newsForms/secondNews";
import Lastnews from "../newsForms/lastNews";
class MainBody extends Component{
    constructor() {
        super();
        this.state ={
            buttonId: null
        }
        this.setButton = this.setButton.bind(this);
    }

    setButton(id){
        this.setState(
            {
                buttonId: id
            }
        )
    }


    render() {
        return(
            <div className="mainBody">
                <div className="newsList">
                    <div className="news">
                        <h1>
                            Карантин в БОНЧЕ? Будет ли?
                        </h1>
                        <div className='newsContent'>
                            <h3>
                                Президент РФ постановил, что в России будет нерабочая неделя!
                            </h3>
                            <input className="button-reg" onClick={() => this.setButton(1)} value="читать далее..."
                                type="button" ref="button" />
                            <div className="choiceWindow">
                                {this.state.buttonId===1 && <WeekendNews/>}
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <h1>
                            Студенты требуют бесплатного чая в столовых?
                        </h1>
                        <div className="newsContent">
                            <h3>
                                Цена на чай невероятно высока!
                            </h3>
                            <input className="button-reg" onClick={() => this.setButton(2)} value="читать далее..."
                                   type="button" ref="button" />
                            <div className="choiceWindow">
                                {this.state.buttonId===2 && <SecondNews/>}
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <h1>
                            Битва факультетов! ИКСС против ИСИТа!
                        </h1>
                        <div className="newsContent">
                            <h3>
                                ИКСС кричит, что они пушка! А ИСИТ?
                            </h3>
                            <input className="button-reg" onClick={() => this.setButton(3)} value="читать далее..."
                                   type="button" ref="button" />
                            <div className="choiceWindow">
                                {this.state.buttonId===3 && <Lastnews/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



// return(
//     <div className="mainBody">
//         <div className="newsList">
//             <div className="news">
//                 <h1>
//                     Карантин в БОНЧЕ? Будет ли?
//                 </h1>
//                 <div className='newsContent'>
//                     <h3>
//                         Президент РФ постановил, что в России будет нерабоча неделя!
//                     </h3>
//                     <button>
//                         читать далее...
//                     </button>
//                 </div>
//
//             </div>
//             <div className="news">
//                 <h1>
//                     Студенты требуют бесплатного чая в столовых?
//                 </h1>
//                 <div className="newsContent">
//                     <h3>
//                         Цена на чай невероятно высока!
//                     </h3>
//                     <button>
//                         читать далее...
//                     </button>
//                 </div>
//             </div>
//             <div className="news">
//                 <h1>
//                     Битва факультетов! ИКСС против ИСИТа!
//                 </h1>
//                 <div className="newsContent">
//                     <h3>
//                         ИКСС кричит, что они пушка! А ИСИТ?
//                     </h3>
//                     <button>
//                         читать далее...
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

export default MainBody;