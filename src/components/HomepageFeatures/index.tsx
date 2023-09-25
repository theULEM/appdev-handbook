import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Digital Literacy',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Are you ready to break barriers and seize the opportunities of the digital world? Take this program and empower yourself with essential digital literacy skills to thrive in today's society.
            </>
        ),
    },
    {
        title: 'Web & Mobile App Development',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                <p>This ULEM program  uses JavaScript, one of the most popular programming languages among developers for 2022 according to Statista, to teach students to create web and mobile applications.
                </p>
            </>
        ),
    },
    {
        title: 'Digital Product Design',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                <p>Today's digital landscape requires businesses to have an engaging online presence, and skilled User
                    Interface (UI) and User Experience (UX) designers to create it. As new technologies such as
                    Augmented Reality (AR) and Virtual Reality (VR) continue to develop, the demand for UI/UX designers
                    is predicted to grow significantly.</p>
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
