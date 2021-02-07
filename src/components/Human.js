import React, { lazy, Suspense } from "react";
import Loading from './Loading';

const POSITION_SITTING = 'sitting';
const ASSET_ROOT_DIRECTORY = './humans/';
const HEAD_DIRECTORY_SUFFIX = 'head/';
const TORSO_DIRECTORY_SUFFIX = 'body/';
const SITTING_DIRECTORY_SUFFIX = 'sitting/';
const STANDING_DIRECTORY_SUFFIX = 'standing/';

function setBottomDirectory(position) {
    let bottomSuffix = position === POSITION_SITTING ? SITTING_DIRECTORY_SUFFIX : STANDING_DIRECTORY_SUFFIX
    return (ASSET_ROOT_DIRECTORY + bottomSuffix)
}

export default function Human({ head, body, bottom, position }) {
    const Head = lazy(() => import(`${ASSET_ROOT_DIRECTORY}${HEAD_DIRECTORY_SUFFIX}${head}`));
    const Body = lazy(() => import(`${ASSET_ROOT_DIRECTORY}${TORSO_DIRECTORY_SUFFIX}${body}`));
    const Bottom = lazy(() => import(`${setBottomDirectory(position)}${bottom}`));

    return (
        <Suspense fallback={<Loading />}>
            <svg height={400}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <g id="humaaans" fillRule="evenodd" strokeWidth="1">
                    <g id={`a-${position}-human`}>
                        <g id="head" transform="translate(82.000000, 0.000000)">
                            <Head />
                        </g>
                        <g id="bottom" transform="translate(0.000000, 187.000000)">
                            <Bottom />
                        </g>
                        <g id="body" transform="translate(22.000000, 82.000000)">
                            <Body />
                        </g>
                    </g>
                </g>
            </svg>
        </Suspense>
    )
}
