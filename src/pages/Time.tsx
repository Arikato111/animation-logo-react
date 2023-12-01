import { useState } from "react";
import { BasisCurve, Line } from "react-svg-curve";

function random(seed: number) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function randRange(id: number, line_point: number) {
    let s = Math.floor(Number(new Date().getTime() / (1000 * 1000)));
    return Math.floor(random((line_point + s) * id) * 100);
}

export default function Time() {
    const [line, setLine] = useState([...Array(100).keys()]);
    const [isCurve, setIsCurve] = useState(false);

    function data(id: number): [number, number][] {

        return [[100, randRange(1, id)],
        [200, randRange(2, id)],
        [300, randRange(3, id)],
        [400, randRange(4, id)],
        [500, randRange(5, id)],
        [600, randRange(6, id)],
        [700, randRange(7, id)],
        [800, randRange(8, id)],
        [900, randRange(9, id)],
        [1000, randRange(10, id)],
        ]
    }
    return (
        <>
            <div style={{ textAlign: "center", padding: 10 }}>
                <div>{line.length}</div>
                <input
                    type="range"
                    value={line.length}
                    max={1000}
                    min={1}
                    onChange={(e) => setLine([...Array(Number(e.target.value)).keys()])}
                />
                <div>
                    <span>
                        curve
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={isCurve}
                            onChange={(e) => setIsCurve(e.target.checked)}
                        />
                    </span>
                </div>
            </div>
            <div style={{ position: "relative", textAlign: "center" }}>
                {line.map((v, idx) => (
                    <div style={{ position: "absolute" }}>
                        <svg
                            width="100vw"
                            height="100vh"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isCurve ? (
                                <BasisCurve data={data(v)} showPoints={false} />
                            ) : (
                                <Line data={data(v)} />
                            )}
                        </svg>
                    </div>
                ))}
            </div>
        </>
    );
}
