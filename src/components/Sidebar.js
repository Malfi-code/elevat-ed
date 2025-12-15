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
        } else if (page === "ss/economics") {
            return sidebars[2];
        } else if (page === "sciences/ib-physics") {
            return sidebars[3];
        } else if (page === "sciences/comp-sci") {
            return sidebars[4];
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
                        {page === "math/aa" && <h1>Analysis & Approaches</h1>}
                        {page === "math/ai" && <h1>Applications & Interpretation</h1>}
                        {page === "ss/economics" && <h1>Economics</h1>}
                        {page === "sciences/ib-physics" && <h1>IB Physics</h1>}
                        {page === "sciences/comp-sci" && <h1>IB Computer Science</h1>}
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

const sidebars = [
    [ // Math AA [0]
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
    ],
    [ // Math AI [1]
        {
            title: "Topic 1: Number and Algebra",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/math/ai/1-1"><b>1.1:</b> Standard form</Link>
                    <Link to="/subjects/math/ai/1-2"><b>1.2:</b> Arithmetic sequences and series</Link>
                    <Link to="/subjects/math/ai/1-3"><b>1.3:</b> Geometric sequences and series</Link>
                    <Link to="/subjects/math/ai/1-4"><b>1.4:</b> Financial applications of geometric sequences and series</Link>
                    <Link to="/subjects/math/ai/1-5"><b>1.5:</b> Integer exponents and introduction to logarithms</Link>
                    <Link to="/subjects/math/ai/1-6"><b>1.6:</b> Approximation, estimation, bounds and errors</Link>
                    <Link to="/subjects/math/ai/1-7"><b>1.7:</b> Amortization and annuities using technology</Link>
                    <Link to="/subjects/math/ai/1-8"><b>1.8:</b> Using technology to solve systems of equations and polynomials</Link>
                    <b>HL only</b>
                    <Link to="/subjects/math/ai/1-9"><b>1.9:</b> Laws of logarithms</Link>
                    <Link to="/subjects/math/ai/1-10"><b>1.10:</b> Rational exponents</Link>
                    <Link to="/subjects/math/ai/1-11"><b>1.11:</b> The sum of infinite geometric sequences</Link>
                    <Link to="/subjects/math/ai/1-12"><b>1.12:</b> Complex numbers</Link>
                    <Link to="/subjects/math/ai/1-13"><b>1.13:</b> Euler and Polar form</Link>
                    <Link to="/subjects/math/ai/1-14"><b>1.14:</b> Matrices</Link>
                    <Link to="/subjects/math/ai/1-15"><b>1.15:</b> Eigenvalues and eigenvectors</Link>
                </div>
            )
        },
        {
            title: "Topic 2: Functions",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/math/ai/2-1"><b>2.1:</b> Gradients and equations of straight lines</Link>
                    <Link to="/subjects/math/ai/2-2"><b>2.2:</b> Introduction to functions</Link>
                    <Link to="/subjects/math/ai/2-3"><b>2.3:</b> Graphing functions</Link>
                    <Link to="/subjects/math/ai/2-4"><b>2.4:</b> Key features of graphs</Link>
                    <Link to="/subjects/math/ai/2-5"><b>2.5:</b> Modelling with functions</Link>
                    <Link to="/subjects/math/ai/2-6"><b>2.6:</b> Modelling skills</Link>
                    <b>HL only</b>
                    <Link to="/subjects/math/ai/2-7"><b>2.7:</b> Composite and inverse functions</Link>
                    <Link to="/subjects/math/ai/2-8"><b>2.8:</b> Transformations</Link>
                    <Link to="/subjects/math/ai/2-9"><b>2.9:</b> Modelling further functions</Link>
                    <Link to="/subjects/math/ai/2-10"><b>2.10:</b> Using logarithms to scale numbers and linearize data</Link>
                </div>
            )
        },
        {
            title: "Topic 3: Geometry and Trigonometry",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/math/ai/3-1"><b>3.1:</b> Geometry recap</Link>
                    <Link to="/subjects/math/ai/3-2"><b>3.2:</b> Trigonometry recap</Link>
                    <Link to="/subjects/math/ai/3-3"><b>3.3:</b> Applications and diagrams</Link>
                    <Link to="/subjects/math/ai/3-4"><b>3.4:</b> Circles, sectors, and arcs</Link>
                    <Link to="/subjects/math/ai/3-5"><b>3.5:</b> Equations of perpendicular bisectors</Link>
                    <Link to="/subjects/math/ai/3-6"><b>3.6:</b> Voronoi diagrams</Link>
                    <b>HL only</b>
                    <Link to="/subjects/math/ai/3-7"><b>3.7:</b> Radians</Link>
                    <Link to="/subjects/math/ai/3-8"><b>3.8:</b> Sine, cosine, tangent definitions and Pythagorean identity</Link>
                    <Link to="/subjects/math/ai/3-9"><b>3.9:</b> Matrix transformations</Link>
                    <Link to="/subjects/math/ai/3-10"><b>3.10:</b> Vectors introduction and notation</Link>
                    <Link to="/subjects/math/ai/3-11"><b>3.11:</b> Vector equation of a line</Link>
                    <Link to="/subjects/math/ai/3-12"><b>3.12:</b> Vector application to kinematics</Link>
                    <Link to="/subjects/math/ai/3-13"><b>3.13:</b> Scalar and cross product</Link>
                    <Link to="/subjects/math/ai/3-14"><b>3.14:</b> Graph theory and simple, directed, and subgraphs</Link>
                    <Link to="/subjects/math/ai/3-15"><b>3.15:</b> Adjacency matrices and weighted adjacency tables</Link>
                    <Link to="/subjects/math/ai/3-16"><b>3.16:</b> Decision math</Link>
                </div>
            )
        },
        {
            title: "Topic 4: Statistics and Probability",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/math/ai/4-1"><b>4.1:</b> Sampling</Link>
                    <Link to="/subjects/math/ai/4-2"><b>4.2:</b> Presenting data (tables, histograms, cumulative frequency)</Link>
                    <Link to="/subjects/math/ai/4-3"><b>4.3:</b> Measures of central tendency and dispersion</Link>
                    <Link to="/subjects/math/ai/4-4"><b>4.4:</b> Correlation and regression line</Link>
                    <Link to="/subjects/math/ai/4-5"><b>4.5:</b> Introduction to probability</Link>
                    <Link to="/subjects/math/ai/4-6"><b>4.6:</b> Diagrams, conditional probability, combined or independent events</Link>
                    <Link to="/subjects/math/ai/4-7"><b>4.7:</b> Discrete random variables</Link>
                    <Link to="/subjects/math/ai/4-8"><b>4.8:</b> Binomial distribution</Link>
                    <Link to="/subjects/math/ai/4-9"><b>4.9:</b> Normal distribution</Link>
                    <Link to="/subjects/math/ai/4-10"><b>4.10:</b> Spearman’s rank</Link>
                    <Link to="/subjects/math/ai/4-11"><b>4.11:</b> Hypothesis testing: chi-squared and t-tests</Link>
                    <b>HL only</b>
                    <Link to="/subjects/math/ai/4-12"><b>4.12:</b> Collecting and organizing data and testing for reliability and validity</Link>
                    <Link to="/subjects/math/ai/4-13"><b>4.13:</b> Regression, residuals, coefficient of determination</Link>
                    <Link to="/subjects/math/ai/4-14"><b>4.14:</b> Linear transformations, linear combinations, unbiased estimations</Link>
                    <Link to="/subjects/math/ai/4-15"><b>4.15:</b> Central Limit Theorem</Link>
                    <Link to="/subjects/math/ai/4-16"><b>4.16:</b> Confidence intervals</Link>
                    <Link to="/subjects/math/ai/4-17"><b>4.17:</b> Poisson distribution</Link>
                    <Link to="/subjects/math/ai/4-18"><b>4.18:</b> Further hypothesis testing</Link>
                    <Link to="/subjects/math/ai/4-19"><b>4.19:</b> Transition matrices and Markov chains</Link>
                </div>
            )
        },
        {
            title: "Topic 5: Calculus",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/math/ai/5-1"><b>5.1:</b> Introduction to limits and derivatives</Link>
                    <Link to="/subjects/math/ai/5-2"><b>5.2:</b> Increasing and decreasing functions</Link>
                    <Link to="/subjects/math/ai/5-3"><b>5.3:</b> Derivative of \( f(x) = ax^n \)</Link>
                    <Link to="/subjects/math/ai/5-4"><b>5.4:</b> Tangents and normals</Link>
                    <Link to="/subjects/math/ai/5-5"><b>5.5:</b> Definite integrals</Link>
                    <Link to="/subjects/math/ai/5-6"><b>5.6:</b> Maximum and minimum points</Link>
                    <Link to="/subjects/math/ai/5-7"><b>5.7:</b> Optimisation</Link>
                    <Link to="/subjects/math/ai/5-8"><b>5.8:</b> Area using the trapezoidal rule</Link>
                    <b>HL only</b>
                    <Link to="/subjects/math/ai/5-9"><b>5.9:</b> More derivatives and the chain, product, and quotient rules</Link>
                    <Link to="/subjects/math/ai/5-10"><b>5.10:</b> Second derivatives</Link>
                    <Link to="/subjects/math/ai/5-11"><b>5.11:</b> Further integration by inspection and substitution</Link>
                    <Link to="/subjects/math/ai/5-12"><b>5.12:</b> Area of a region and volumes of revolution</Link>
                    <Link to="/subjects/math/ai/5-13"><b>5.13:</b> Kinematic problems</Link>
                    <Link to="/subjects/math/ai/5-14"><b>5.14:</b> Differential equations</Link>
                    <Link to="/subjects/math/ai/5-15"><b>5.15:</b> Slope fields and their diagrams</Link>
                    <Link to="/subjects/math/ai/5-16"><b>5.16:</b> Euler's method and numerical solutions to differential equations and coupled systems</Link>
                    <Link to="/subjects/math/ai/5-17"><b>5.17:</b> Phase portraits</Link>
                    <Link to="/subjects/math/ai/5-18"><b>5.18:</b> Simple second-order differential equations</Link>
                </div>
            )
        }
    ],
    [ // Economics [2]
        {
            title: "Unit 1: Introduction to Economics",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/ss/economics/1-1"><b>1.1:</b> What is economics?</Link>
                    <Link to="/subjects/ss/economics/1-2"><b>1.2:</b> How do economists approach the world?</Link>
                </div>
            )
        },
        {
            title: "Unit 2: Microeconomics",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/ss/economics/2-1"><b>2.1:</b> Demand</Link>
                    <Link to="/subjects/ss/economics/2-2"><b>2.2:</b> Supply</Link>
                    <Link to="/subjects/ss/economics/2-3"><b>2.3:</b> Competitive market equilibrium</Link>
                    <Link to="/subjects/ss/economics/2-4"><b>2.4:</b> Critique of the maximizing behaviour of consumers and producers</Link>
                    <Link to="/subjects/ss/economics/2-5"><b>2.5:</b> Elasticity of demand</Link>
                    <Link to="/subjects/ss/economics/2-6"><b>2.6:</b> Elasticity of supply</Link>
                    <Link to="/subjects/ss/economics/2-7"><b>2.7:</b> Role of government in microeconomics</Link>
                    <Link to="/subjects/ss/economics/2-8"><b>2.8:</b> Market failure — externalities and common pool or common access resources</Link>
                    <Link to="/subjects/ss/economics/2-9"><b>2.9:</b> Market failure — public goods</Link>
                    <Link to="/subjects/ss/economics/2-10"><b>2.10:</b> Market failure — asymmetric information</Link>
                    <Link to="/subjects/ss/economics/2-11"><b>2.11:</b> Market failure — market power</Link>
                    <Link to="/subjects/ss/economics/2-12"><b>2.12:</b> The market’s inability to achieve equity</Link>
                </div>
            )
        },
        {
            title: "Unit 3: Macroeconomics",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/ss/economics/3-1"><b>3.1:</b> Measuring economic activity and illustrating its variations</Link>
                    <Link to="/subjects/ss/economics/3-2"><b>3.2:</b> Variations in economic activity — aggregate demand and aggregate supply</Link>
                    <Link to="/subjects/ss/economics/3-3"><b>3.3:</b> Macroeconomic objectives</Link>
                    <Link to="/subjects/ss/economics/3-4"><b>3.4:</b> Economics of inequality and poverty</Link>
                    <Link to="/subjects/ss/economics/3-5"><b>3.5:</b> Demand management (demand-side policies) — monetary policy</Link>
                    <Link to="/subjects/ss/economics/3-6"><b>3.6:</b> Demand management — fiscal policy</Link>
                    <Link to="/subjects/ss/economics/3-7"><b>3.7:</b> Supply-side policies</Link>
                </div>
            )
        },
        {
            title: "Unit 4: The Global Economy",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/ss/economics/4-1"><b>4.1:</b> Benefits of international trade</Link>
                    <Link to="/subjects/ss/economics/4-2"><b>4.2:</b> Types of trade protection</Link>
                    <Link to="/subjects/ss/economics/4-3"><b>4.3:</b> Arguments for and against trade control/protection</Link>
                    <Link to="/subjects/ss/economics/4-4"><b>4.4:</b> Economic integration</Link>
                    <Link to="/subjects/ss/economics/4-5"><b>4.5:</b> Exchange rates</Link>
                    <Link to="/subjects/ss/economics/4-6"><b>4.6:</b> Balance of payments</Link>
                    <Link to="/subjects/ss/economics/4-7"><b>4.7:</b> Sustainable development</Link>
                    <Link to="/subjects/ss/economics/4-8"><b>4.8:</b> Measuring development</Link>
                    <Link to="/subjects/ss/economics/4-9"><b>4.9:</b> Barriers to economic growth and/or economic development</Link>
                    <Link to="/subjects/ss/economics/4-10"><b>4.10:</b> Economic growth and/or economic development strategies</Link>
                </div>
            )
        }
    ],
    [ // Physics [3]
        {
            title: "Topic 1: Space, Time and Motion",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/ib-physics/1-1"><b>1.1:</b> Kinematics</Link>
                    <Link to="/subjects/sciences/ib-physics/1-2"><b>1.2:</b> Forces and momentum</Link>
                    <Link to="/subjects/sciences/ib-physics/1-3"><b>1.3:</b> Work, energy and power</Link>
                    <Link to="/subjects/sciences/ib-physics/1-4"><b>1.4:</b> Rigid body mechanics</Link>
                    <Link to="/subjects/sciences/ib-physics/1-5"><b>1.5:</b> Galilean and special relativity</Link>
                </div>
            )
        },
        {
            title: "Topic 2: The Particulate Nature of Matter",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/ib-physics/2-1"><b>2.1:</b> Thermal energy transfers</Link>
                    <Link to="/subjects/sciences/ib-physics/2-2"><b>2.2:</b> Greenhouse effect</Link>
                    <Link to="/subjects/sciences/ib-physics/2-3"><b>2.3:</b> Gas laws</Link>
                    <Link to="/subjects/sciences/ib-physics/2-4"><b>2.4:</b> Thermodynamics</Link>
                    <Link to="/subjects/sciences/ib-physics/2-5"><b>2.5:</b> Current and circuits</Link>
                </div>
            )
        },
        {
            title: "Topic 3: Wave Behaviour",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/ib-physics/3-1"><b>3.1:</b> Simple harmonic motion</Link>
                    <Link to="/subjects/sciences/ib-physics/3-2"><b>3.2:</b> Wave model</Link>
                    <Link to="/subjects/sciences/ib-physics/3-3"><b>3.3:</b> Wave phenomena</Link>
                    <Link to="/subjects/sciences/ib-physics/3-4"><b>3.4:</b> Standing waves and resonance</Link>
                    <Link to="/subjects/sciences/ib-physics/3-5"><b>3.5:</b> Doppler effect</Link>
                </div>
            )
        },
        {
            title: "Topic 4: Fields",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/ib-physics/4-1"><b>4.1:</b> Gravitational fields</Link>
                    <Link to="/subjects/sciences/ib-physics/4-2"><b>4.2:</b> Electric and magnetic fields</Link>
                    <Link to="/subjects/sciences/ib-physics/4-3"><b>4.3:</b> Motion in electromagnetic fields</Link>
                    <Link to="/subjects/sciences/ib-physics/4-4"><b>4.4:</b> Induction</Link>
                </div>
            )
        },
        {
            title: "Topic 5: Nuclear and Quantum Physics",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/ib-physics/5-1"><b>5.1:</b> Structure of the atom</Link>
                    <Link to="/subjects/sciences/ib-physics/5-2"><b>5.2:</b> Quantum physics</Link>
                    <Link to="/subjects/sciences/ib-physics/5-3"><b>5.3:</b> Radioactive decay</Link>
                    <Link to="/subjects/sciences/ib-physics/5-4"><b>5.4:</b> Fission</Link>
                    <Link to="/subjects/sciences/ib-physics/5-5"><b>5.5:</b> Fusion and stars</Link>
                </div>
            )
        }
    ],
    [ // Computer Science [4]
        {
            title: "Topic 1: System Fundamentals",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/comp-sci/1-1"><b>1.1:</b> Systems in organizations</Link>
                    <Link to="/subjects/sciences/comp-sci/1-2"><b>1.2:</b> System design basics</Link>
                </div>
            )
        },
        {
            title: "Topic 2: Computer Organization",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/comp-sci/2-1"><b>2.1:</b> Computer organization</Link>
                </div>
            )
        },
        {
            title: "Topic 3: Networks",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/comp-sci/3-1"><b>3.1:</b> Networks</Link>
                </div>
            )
        },
        {
            title: "Topic 4: Computational Thinking, Problem-Solving and Programming",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/comp-sci/4-1"><b>4.1:</b> General principles</Link>
                    <Link to="/subjects/sciences/comp-sci/4-2"><b>4.2:</b> Connecting computational thinking and program design</Link>
                    <Link to="/subjects/sciences/comp-sci/4-3"><b>4.3:</b> Introduction to programming</Link>
                </div>
            )
        },
        {
            title: "Topic 5: Abstract Data Structures (HL Only)",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/comp-sci/5-1"><b>5.1:</b> Abstract data structures</Link>
                </div>
            )
        },
        {
            title: "Topic 6: Resource Management",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/comp-sci/6-1"><b>6.1:</b> Resource management</Link>
                </div>
            )
        },
        {
            title: "Topic 7: Control",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/comp-sci/7-1"><b>7.1:</b> Control</Link>
                </div>
            )
        },
        {
            title: "Option D: Object-Oriented Programming",
            content: (
                <div className="flex flex-col gap-2">
                    <Link to="/subjects/sciences/comp-sci/d-1"><b>D.1:</b> Objects as a programming concept</Link>
                    <Link to="/subjects/sciences/comp-sci/d-2"><b>D.2:</b> Features of OOP</Link>
                    <Link to="/subjects/sciences/comp-sci/d-3"><b>D.3:</b> Program development</Link>
                    <Link to="/subjects/sciences/comp-sci/d-4"><b>D.4:</b> Advanced program development (HL only)</Link>
                </div>
            )
        }        
    ]    
];
  