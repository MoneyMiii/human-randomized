import React from 'react';

const POSTURE_SITTING = 1;

const LIST_HEADS = ['Afro', 'Airy', 'Caesar', 'Chongo', 'Curly', 'Hijab', 'Hijab2', 'Long', 'NoHair', 'Pony', 'Rad', 'Short', 'Short2', 'ShortBeard', 'Top', 'Turban', 'Turban2', 'Wavy'];
const LIST_BODY = ['Hoodie', 'Jacket2', 'Jacket', 'LabCoat', 'LongSleeve', 'PointingForward', 'PointingUp', 'Pregnant', 'TrenchCoat', 'TurtleNeck'];
const LIST_BOTTOM_SITTING = ['BaggyPants', 'SkinnyJeans', 'SweatPants', 'Wheelchair'];
const LIST_BOTTOM_STANDING = ['BaggyPants', 'Jogging', 'Shorts', 'SkinnyJeansWalk', 'SkinnyJeans', 'Skirt', 'Sprint', 'SweatPants'];

function getRandPosition() {
    return Math.floor(Math.random() * 2) === POSTURE_SITTING ? "sitting" : "standing";
}

function getRanHead() {
    return LIST_HEADS[Math.floor(Math.random() * LIST_HEADS.length)];
}

function getRanBody() {
    return LIST_BODY[Math.floor(Math.random() * LIST_BODY.length)];
}

function getRanBottom(position) {
    return position === "standing"
        ? LIST_BOTTOM_STANDING[Math.floor(Math.random() * LIST_BOTTOM_STANDING.length)]
        : LIST_BOTTOM_SITTING[Math.floor(Math.random() * LIST_BOTTOM_SITTING.length)];
}
export default function Randomized() {
    let position = getRandPosition();

    return (
        <div className="humans">
            {position}
            {getRanHead()}
            {getRanBody()}
            {getRanBottom(position)}
        </div>
    );
}