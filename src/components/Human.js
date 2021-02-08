import React, { lazy, Suspense } from "react";
import Loading from './Loading';

const DEFAULT_WIDTH = 380;
const DEFAULT_SITTING_HEIGHT = 400;
const DEFAULT_STANDING_HEIGHT = 480;
const POSITION_SITTING = 'sitting'
const SITTING_HEIGHT_ADJUSTMENT_IN_PX = 24;
const STANDING_HEIGHT_ADJUSTMENT_IN_PX = 31;
const ASSET_ROOT_DIRECTORY = './humans/'
const HEAD_DIRECTORY_SUFFIX = 'head/'
const TORSO_DIRECTORY_SUFFIX = 'body/'
const SITTING_DIRECTORY_SUFFIX = 'sitting/'
const STANDING_DIRECTORY_SUFFIX = 'standing/'
const STANDING_RATIO = DEFAULT_STANDING_HEIGHT / DEFAULT_WIDTH;
const SITTING_RATIO = DEFAULT_SITTING_HEIGHT / DEFAULT_WIDTH;

function setHeightFromSizeAndPosture(position) {
    return (DEFAULT_WIDTH * setHeigthToWidthRatioFromPosture(position));
}

function setHeightAdjustmentFromPosture(position) {
    let heightAdjustment = position === POSITION_SITTING
        ? SITTING_HEIGHT_ADJUSTMENT_IN_PX
        : STANDING_HEIGHT_ADJUSTMENT_IN_PX;
    return (`translate(40.000000, ${heightAdjustment})`);
}

function setHeigthToWidthRatioFromPosture(position) {
    return (position === POSITION_SITTING
        ? SITTING_RATIO
        : STANDING_RATIO)
}

function setViewBox(position) {
    var height = position === POSITION_SITTING
        ? DEFAULT_SITTING_HEIGHT
        : DEFAULT_STANDING_HEIGHT;

    return (`0 0 ${DEFAULT_WIDTH} ${height}`);
}

function setBottomDirectory(position) {
    let bottomSuffix = position === POSITION_SITTING ? SITTING_DIRECTORY_SUFFIX : STANDING_DIRECTORY_SUFFIX
    return (ASSET_ROOT_DIRECTORY + bottomSuffix)
}

export default function Human({ head, body, bottom, position }) {

    let height = setHeightFromSizeAndPosture(null, position);
    let heightAdjustmentFromPosition = setHeightAdjustmentFromPosture(position);
    let viewBox = setViewBox(position);

    const Head = lazy(() => import(`${ASSET_ROOT_DIRECTORY}${HEAD_DIRECTORY_SUFFIX}${head}`));
    const Body = lazy(() => import(`${ASSET_ROOT_DIRECTORY}${TORSO_DIRECTORY_SUFFIX}${body}`));
    const Bottom = lazy(() => import(`${setBottomDirectory(position)}${bottom}`));

    return (
        <Suspense fallback={<Loading />}>
            <svg height={height}
                width={DEFAULT_WIDTH}
                version="1.1"
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg">
                <g id="humaaans" fillRule="evenodd" strokeWidth="1">
                    <g id={`a-${position}-human`}
                        transform={`${heightAdjustmentFromPosition}`}>
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
