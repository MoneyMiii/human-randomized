import React from 'react';
import Human from './Human';

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
    let pos1 = getRandPosition();
    let pos2 = getRandPosition();
    let pos3 = getRandPosition();

    return (
        <div className="humans">
            <Human
                position={pos1}
                head={getRanHead()}
                body={getRanBody()}
                bottom={getRanBottom(pos1)}
            />
            <Human
                position={pos2}
                head={getRanHead()}
                body={getRanBody()}
                bottom={getRanBottom(pos2)}
            />
            <Human
                position={pos3}
                head={getRanHead()}
                body={getRanBody()}
                bottom={getRanBottom(pos3)}
            />
        </div>
    );
}