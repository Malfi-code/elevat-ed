import React, { useState } from "react";
import './Sidebar.css';
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

function Sidebar({ page }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [widthZero, setWidthZero] = useState(false);

    const getItems = () => {
        if (page === "math/aa") {
            return sidebars[0];
        } else if (page === "math/ai") {
            return sidebars[1];
        } else {
            return [
                {title: "Default Chapter", content:"This is the default content."}
            ];
        }
    };

    const handleToggle = () => {
        if (!isCollapsed) {
            // Start collapsing: slide it off-screen first.
            setIsCollapsed(true);
        } else {
            // Expand: first restore the width,
            // then after a short delay, slide it back in.
            setWidthZero(false);
            // Use a timeout (or requestAnimationFrame) to ensure width update takes effect before translation.
            setTimeout(() => {
                setIsCollapsed(false);
            }, 50);
        }
    };

    const handleTransitionEnd = (event) => {
        // Ensure we're reacting to the transform transition, not width.
        if (event.propertyName === "transform" && isCollapsed && !widthZero) {
            setWidthZero(true);
        }
    };

    return (
        <div 
            className={`sidebar-container ${isCollapsed ? "collapsed" : ""} ${widthZero ? "width-zero" : ""}`}
            onTransitionEnd={handleTransitionEnd}
        >
            <div className={`sidebar`}>
                <div className="sidebar-content">
                    <div className="p-4">
                        <h1>Analysis & Approaches</h1>
                        <h2>Units</h2>
                    </div>
                    <Accordion items={getItems()}/>
                </div>
            </div>
            <button
                className={`sidebar-toggle ${isCollapsed ? "collapsed" : ""}`}
                onClick={handleToggle}
            >
            </button>
        </div>
    );
}

export default Sidebar;

// In Sidebar.js (or wherever your sidebar data is defined)
const sidebars = [
    [ // AA [0]
        {
            title: "Topic 1: Number and Algebra",
            content: (
            <div className="flex flex-col gap-2">
            <b>Year 1</b>
            <Link to="/subjects/math/aa/1-1"><b>1.1:</b> Numbers – rounding – scientific form</Link>
            <Link to="/subjects/math/aa/1-2"><b>1.2:</b> Sequences in general - Series</Link>
            <Link to="/subjects/math/aa/1-3"><b>1.3:</b> Arithmetic sequences</Link>
            <Link to="/subjects/math/aa/1-4"><b>1.4:</b> Geometric sequences</Link>
            <Link to="/subjects/math/aa/1-5"><b>1.5:</b> Applications of G.S. – Percentage growth</Link>
            <Link to="/subjects/math/aa/1-6"><b>1.6:</b> The Binomial Theorem – <i>(a+b)<sup>n</sup></i></Link>
            <Link to="/subjects/math/aa/1-7"><b>1.7:</b> Deductive proof</Link>
            <Link to="/subjects/math/aa/1-8"><b>1.8:</b> Methods of proof</Link>
            <Link to="/subjects/math/aa/1-9"><b>1.9:</b> Mathematical induction</Link>
            <b>Year 2</b>
            <Link to="/subjects/math/aa/1-10"><b>1.10:</b> Systems of linear equations</Link>
            <Link to="/subjects/math/aa/1-11"><b>1.11:</b> Complex numbers – basic operations</Link>
            <Link to="/subjects/math/aa/1-12"><b>1.12:</b> Polynomials over the Complex field</Link>
            <Link to="/subjects/math/aa/1-13"><b>1.13:</b> The complex plane</Link>
            <Link to="/subjects/math/aa/1-14"><b>1.14:</b> De Moivre’s theorem</Link>
            <Link to="/subjects/math/aa/1-15"><b>1.15:</b> Roots of <i>z<sup>n</sup>=a</i></Link>
            </div>
            )
        }, {
            title: "Topic 2: Functions",
            content: (
            <div className="flex flex-col gap-2">
            <Link to="/subjects/math/aa/2-1"><b>2.1:</b> Lines (or Linear functions)</Link>
            <Link to="/subjects/math/aa/2-2"><b>2.2:</b> Quadratics (or Quadratic functions)</Link>
            <Link to="/subjects/math/aa/2-3"><b>2.3:</b> Functions, domain, range, graph</Link>
            <Link to="/subjects/math/aa/2-4"><b>2.4:</b> Composition of functions: <i>f o g</i></Link>
            <Link to="/subjects/math/aa/2-5"><b>2.5:</b> The inverse function: <i>f<sup>-1</sup></i></Link>
            <Link to="/subjects/math/aa/2-6"><b>2.6:</b> Transformations of functions</Link>
            <Link to="/subjects/math/aa/2-7"><b>2.7:</b> Asymptotes</Link>
            <Link to="/subjects/math/aa/2-8"><b>2.8:</b> Exponents – the exponential function <i>a<sup>x</sup></i></Link>
            <Link to="/subjects/math/aa/2-9"><b>2.9:</b> Logarithms – the logarithmic function <i>log<sub>a</sub>x</i></Link>
            <Link to="/subjects/math/aa/2-10"><b>2.10:</b> Exponential Equations</Link>
            <Link to="/subjects/math/aa/2-11"><b>2.11:</b> Polynomial functions</Link>
            <Link to="/subjects/math/aa/2-12"><b>2.12:</b> Sum and Product of roots</Link>
            <Link to="/subjects/math/aa/2-13"><b>2.13:</b> Rational functions – Partial fractions</Link>
            <Link to="/subjects/math/aa/2-14"><b>2.14:</b> Polynomial and rational inequalities</Link>
            <Link to="/subjects/math/aa/2-15"><b>2.15:</b> Symmetries of <i>f(x)</i> – More transformations</Link>
            <Link to="/subjects/math/aa/2-16"><b>2.16:</b> Modulus equations and inequalities</Link>
            </div>
            )
        }, {
            title: "Topic 3: Trigonometry",
            content: (
            <div className="flex flex-col gap-2">
                <b>Year 1</b>
                <Link to="/subjects/math/aa/3-1"><b>3.1:</b> 3D Geometry</Link>
                <Link to="/subjects/math/aa/3-2"><b>3.2:</b> Triangles – Sine and Cosine rules</Link>
                <Link to="/subjects/math/aa/3-3"><b>3.3:</b> Applications in 3D Geometry – Navigation</Link>
                <Link to="/subjects/math/aa/3-4"><b>3.4:</b> The trigonometric circle – Arcs and Sectors</Link>
                <Link to="/subjects/math/aa/3-5"><b>3.5:</b> sinθ, cosθ, tanθ on the unit circle</Link>
                <Link to="/subjects/math/aa/3-6"><b>3.6:</b> Trigonometric identities and equations</Link>
                <Link to="/subjects/math/aa/3-7"><b>3.7:</b> Trigonometric functions</Link>
                <Link to="/subjects/math/aa/3-8"><b>3.8:</b> More trigonometric equations – identities</Link>
                <Link to="/subjects/math/aa/3-9"><b>3.9:</b> Inverse trigonometric functions</Link>
                <b>Year 2</b>
                <Link to="/subjects/math/aa/3-10"><b>3.10:</b> Vectors: Geometric representation</Link>
                <Link to="/subjects/math/aa/3-11"><b>3.11:</b> Vectors: Algebraic representation</Link>
                <Link to="/subjects/math/aa/3-12"><b>3.12:</b> Scalar (or Dot) product – angle between vectors</Link>
                <Link to="/subjects/math/aa/3-13"><b>3.13:</b> Vector equation of a line in 2D</Link>
                <Link to="/subjects/math/aa/3-14"><b>3.14:</b> Vector equation of a line in 3D</Link>
                <Link to="/subjects/math/aa/3-15"><b>3.15:</b> Vector (or Cross) product</Link>
                <Link to="/subjects/math/aa/3-16"><b>3.16:</b> Planes</Link>
                <Link to="/subjects/math/aa/3-17"><b>3.17:</b> Intersections among lines and planes</Link>
                <Link to="/subjects/math/aa/3-18"><b>3.18:</b> Distances</Link>
            </div>
            )
        }, {
            title: "Topic 4: Statistics and Probability",
            content: (
            <div className="flex flex-col gap-2">
                <Link to="/subjects/math/aa/4-1"><b>4.1:</b> Basic concepts of Statistics</Link>
                <Link to="/subjects/math/aa/4-2"><b>4.2:</b> Measures of central tendency – Measures of spread</Link>
                <Link to="/subjects/math/aa/4-3"><b>4.3:</b> Frequency tables – Grouped Data</Link>
                <Link to="/subjects/math/aa/4-4"><b>4.4:</b> Regression</Link>
                <Link to="/subjects/math/aa/4-5"><b>4.5:</b> Elementary Set Theory</Link>
                <Link to="/subjects/math/aa/4-6"><b>4.6:</b> Probability</Link>
                <Link to="/subjects/math/aa/4-7"><b>4.7:</b> Conditional probability – Independent events</Link>
                <Link to="/subjects/math/aa/4-8"><b>4.8:</b> Tree diagrams</Link>
                <Link to="/subjects/math/aa/4-9"><b>4.9:</b> Distributions – Discrete random variables</Link>
                <Link to="/subjects/math/aa/4-10"><b>4.10:</b> Binomial distribution – <i>B(n,p)</i></Link>
                <Link to="/subjects/math/aa/4-11"><b>4.11:</b> Normal distribution – <i>Ν(μ,σ)</i></Link>
                <Link to="/subjects/math/aa/4-12"><b>4.12:</b> Continuous random variables</Link>
                <Link to="/subjects/math/aa/4-13"><b>4.13:</b> Counting – Permutations – Combinations</Link>
            </div>
            )
        }, {
            title: "Topic 5: Calculus",
            content: (
            <div className="flex flex-col gap-2">
                <b>Year 1</b>
                <Link to="/subjects/math/aa/5-1"><b>5.1:</b> The limit lim <i>f(x)</i> – The derivative <i>f '(x):</i> A rough idea!</Link>
                <Link to="/subjects/math/aa/5-2"><b>5.2:</b> Derivatives of known functions – Rules</Link>
                <Link to="/subjects/math/aa/5-3"><b>5.3:</b> Tangent line – Normal line at some point <i>x<sub>o</sub></i></Link>
                <Link to="/subjects/math/aa/5-4"><b>5.4:</b> The chain rule</Link>
                <Link to="/subjects/math/aa/5-5"><b>5.5:</b> Monotony – max, min</Link>
                <Link to="/subjects/math/aa/5-6"><b>5.6:</b> Concavity – points of inflection</Link>
                <Link to="/subjects/math/aa/5-7"><b>5.7:</b> Optimisation</Link>
                <Link to="/subjects/math/aa/5-8"><b>5.8:</b> The indefinite integral</Link>
                <Link to="/subjects/math/aa/5-9"><b>5.9:</b> Integration by substitution</Link>
                <Link to="/subjects/math/aa/5-10"><b>5.10:</b> The definite integral - Areas between curves</Link>
                <Link to="/subjects/math/aa/5-11"><b>5.11:</b> Kinematics</Link>
                <b>Year 2</b>
                <Link to="/subjects/math/aa/5-12"><b>5.12:</b> Continuity and differentiability</Link>
                <Link to="/subjects/math/aa/5-13"><b>5.13:</b> L’Hôpital’s rule</Link>
                <Link to="/subjects/math/aa/5-14"><b>5.14:</b> Implicit differentiation (without kinematics)</Link>
                <Link to="/subjects/math/aa/5-15"><b>5.15:</b> Rate of change problems</Link>
                <Link to="/subjects/math/aa/5-16"><b>5.16:</b> Further integration by substitution</Link>
                <Link to="/subjects/math/aa/5-17"><b>5.17:</b> Integration by parts</Link>
                <Link to="/subjects/math/aa/5-18"><b>5.18:</b> Further areas between curves - Volumes</Link>
                <Link to="/subjects/math/aa/5-19"><b>5.19:</b> Differential equations</Link>
                <Link to="/subjects/math/aa/5-20"><b>5.20:</b> Maclaurin series – Extension of Binomial Theorem</Link>
            </div>
            )
        }
        // ... other chapters
    ],
    [ // AI [1]
        {
            title: "Chapter 1: Barbosa",
            content: (
                <div className="chapter-links">
                <a href="/barbosa/info">Info</a>
                <a href="/barbosa/details">Details</a>
                </div>
            )
        }
    ]
];
  