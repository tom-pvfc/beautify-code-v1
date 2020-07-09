import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';
import MainHeader from '../../components/ui/MainHeader/MainHeader';
import AboutProcess from '../../components/ui/AboutProcess/AboutProcess';

export interface AboutPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    sectionData: any;
}

const INIT_STATE: AboutPageState = {

}

export interface AboutPageState {

}

export class AboutPage extends React.Component<AboutPageProps, AboutPageState> {

    constructor(props: AboutPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    render() {
        const { props, state } = this;
        const cls = this.props.className || "";

        let titleHtml = { __html: props.sectionData.title }

        return (
            <div className={"about-page " + cls}>
                <div className="about-page__wrapper">
                    <div dangerouslySetInnerHTML={titleHtml} className="about-page__wrapper--title" ></div>
                    <p className="about-page__wrapper--sub">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                    </p>
                    <div className="about-page__wrapper--data">
                        <h2>Our Work Processes.</h2>
                        <AboutProcess data={PROCESSES} />
                    </div>
                </div>
            </div>
        )
    }
}

const PROCESSES = [
    { 
        key: 0,
        title: "EXPLORE.",
        copy: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
    },
    { 
        key: 1,
        title: "DESIGN.",
        copy: "Aliquam molestiae quia eos consequatur qui. Tempora sit doloribus dolores iure quod quasi totam eum eos. Nulla non sunt eum in itaque qui non sit exercitationem. Sunt sed quasi nobis quaerat dolor et ad. Sagittis sem nibh id elit. Debitis consequuntur quasi fugit."
    },
    { 
        key: 2,
        title: "DEVELOP.",
        copy: "Voluptatem error perspiciatis fugit libero nemo. Repudiandae consequatur qui et quidem dolorem necessitatibus necessitatibus voluptatibus. Debitis consequuntur quasi fugit sapiente. Odit odio laboriosam vitae dolores molestias. Est consectetur et."
    },
    { 
        key: 3,
        title: "DELIVER.",
        copy: "Earum a sit placeat nostrum dolorum. Ut qui autem omnis magni. Dignissimos quasi molestiae tenetur ipsa voluptatum similique iste illo nulla. Ut sunt maiores dolorem recusandae ea. Corporis aperiam repellat quaerat et ab dolores est fuga non."
    },
]

const mapStateToProps = (state: IStoreState, ownProps): Partial<AboutPageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
