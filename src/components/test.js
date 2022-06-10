import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import ReactGoogleSheets from 'react-google-sheets';

class DataComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        sheetLoaded: false,
      }
    }
    render() {
      return (
        <ReactGoogleSheets 
          clientId={"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"}
          apiKey={"207493199203-hmginmgeria3stmr944ohtpfunqjrsck.apps.googleusercontent.com"}
          spreadsheetId={"1ZRyhqc-7aCNR4P4FC5govZqMCc8txKAbv0Bhl5jVvag"}
          afterLoading={() => this.setState({sheetLoaded: true})}
        >
          {this.state.sheetLoaded ? 
            <div>
              {/* Access Data */}
              {/*console.log('Your sheet data : ', this.props.getSheetsData({"customer-contact"}))*/}
              {/* Update Data */}
              <button onClick={() => {
                this.props.updateCell(
                  'sheet02', // sheetName
                  'E', // column
                  13, // row
                  'Apple', // value
                  null, // successCallback
                  (error) => {
                    console.log('error', error)
                  } // errorCallback
                );
              }}>update cell!</button>
            </div>
            :
            'loading...'
          }
        </ReactGoogleSheets>
      )
    }
  }
   
  export default ReactGoogleSheets.connect(DataComponent);