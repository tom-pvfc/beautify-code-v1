import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';

export interface PortfolioPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    sectionData: any;
}

const INIT_STATE: PortfolioPageState = {

}

export interface PortfolioPageState {

}

export class PortfolioPage extends React.Component<PortfolioPageProps, PortfolioPageState> {

    constructor(props: PortfolioPageProps) {
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
            <div className={"portfolio-page " + cls}>
                <div className="portfolio-page__wrapper">
                    <div dangerouslySetInnerHTML={titleHtml} className="portfolio-page__wrapper--title" ></div>
                    <p className="portfolio-page__wrapper--subtitle">
                        {
                            props.sectionData.subTitle
                        }
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<PortfolioPageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
