import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';

export interface ServicesPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    sectionData: any;
}

const INIT_STATE: ServicesPageState = {

}

export interface ServicesPageState {

}

export class ServicesPage extends React.Component<ServicesPageProps, ServicesPageState> {

    constructor(props: ServicesPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    componentDidMount(){
        
    }
    render() {
        const { props, state } = this;
        const cls = this.props.className || "";

        let titleHtml = { __html: props.sectionData.title }
        
        return (
            <div className={"services-page " + cls}>
                <div className="services-page__wrapper">
                    <div dangerouslySetInnerHTML={titleHtml} className="services-page__wrapper--title" ></div>
                    <p className="services-page__wrapper--subtitle">
                        {
                            props.sectionData.subTitle
                        }
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<ServicesPageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);
