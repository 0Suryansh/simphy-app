import PointIcon from '../../assets/Geometry/zgeometry-free-point.svg'
import ReflectionIcon from '../../assets/Geometry/zgeometry-reflection-point.svg'
import ProjectionIcon from '../../assets/Geometry/zgeometry-projection-point.svg'
import DividePoint from '../../assets/Geometry/zgeometry-divide-points-in-k_1.svg'
import PointCordinate from '../../assets/Geometry/zgeometry-points-from-coordinates.svg'
import Line2Point from '../../assets/Geometry/zgeometry-line-2-points.svg'
import Segment2Point from '../../assets/Geometry/zgeometry-segments-2-points.svg'
import Ray2Point from '../../assets/Geometry/zgeometry-ray-2-points.svg'
import ParallelLine from '../../assets/Geometry/zgeometry-parallel-lines.svg'
import PerpendicularLines from '../../assets/Geometry/zgeometry-perpendicular-lines.svg'
import Vector2Points from '../../assets/Geometry/zgeometry-vector-2-points.svg'
import ParallelVector from '../../assets/Geometry/zgeometry-parallel-vector.svg'
import PerpendicularVector from '../../assets/Geometry/zgeometry-perpendicular-vector.svg'
import Circle2Points from '../../assets/Geometry/zgeometry-circle-2-points.svg'
import Circle3Points from '../../assets/Geometry/zgeometry-circle-3-points.svg'
import CircleDiameter from '../../assets/Geometry/zgeometry-circle-diameter.svg'
import CircleCenterRadius from '../../assets/Geometry/zgeometry-circle-center-radius.svg'
import OsculatingCircle from '../../assets/Geometry/zgeometry-osculating-circle.svg'
import Arc3Points from '../../assets/Geometry/zgeometry-arc-3-points.svg'
import ArcCenter2Points from '../../assets/Geometry/zgeometry-arc-center-2-points.svg'
import InsertShapeInfo from '../../assets/Geometry/zgeometry-insert-shape-info.svg'
import Image2Points from '../../assets/Geometry/zgeometry-insert-image-2-points.svg'
import Image4Points from '../../assets/Geometry/zgeometry-insert-image-4-points.svg'
import Text2Point from '../../assets/Geometry/zgeometry-insert-text-2-points.svg'
import MeasureAngle from '../../assets/Geometry/zgeometry-measure-angle.svg'
import MeasureLength from '../../assets/Geometry/zgeometry-measure-length.svg'
import MeasurePoint from '../../assets/Geometry/zgeometry-measure-point.svg'
import EvaluateExpression from '../../assets/Geometry/zgeometry-evaluate-expression.svg'
import Ruler2Points from '../../assets/Geometry/zgeometry-ruler-2-points.svg'
import Protractor3Points from '../../assets/Geometry/zgeometry-protractor-3-points.svg'

import WhiteLight from '../../assets/Optics/xoptics-ray.svg'
import ParallelBeam from '../../assets/Optics/xoptics-beam.svg'
import PointSource from '../../assets/Optics/xoptics-point-source.svg'
import PlaneMirror from '../../assets/Optics/xoptics-plane-mirror.svg'
import IdealMirror from '../../assets/Optics/xoptics-mirror.svg'
import IdealLens from '../../assets/Optics/xoptics-lens.svg'
import PlaneSurface from '../../assets/Optics/xoptics-surface.svg'
import ArcMirror from '../../assets/Optics/xoptics-curved-mirror.svg'
import ArbitaryRefSurface from '../../assets/Optics/xoptics-prism.svg'
import RayBlocker from '../../assets/Optics/xoptics-blocker.svg'
import Observer from '../../assets/Optics/xoptics-observer.svg'

export const CONSTANTS=[
    [
        {
            icon:PointIcon,
            desc:"Free Point",
            clickFn: "point-free"
        },
        {
            icon:ReflectionIcon,
            desc:"Reflection of Point about Line",
            clickFn: "point-reflection"
        },
        {
            icon:ProjectionIcon,
            desc:"Projection Point",
            clickFn: "point-proj"
        },
        {
            icon:DividePoint,
            desc:"Divide Point in K:1 ",
            clickFn: "point-ratio"
        },
        {
            icon:PointCordinate,
            desc:"Point from Coordinates",
            clickFn: "point-coord"
        },
    ],
    [
        {
            icon:Line2Point,
            desc:"Line 2 Points",
            clickFn:"line-2pts"
        },
        {
            icon:Segment2Point,
            desc:"Segment 2 Points",
            clickFn:"line-segments"
        },
        {
            icon:Ray2Point,
            desc:"Ray 2 Points",
            clickFn:"line-ray"
        },
        {
            icon:ParallelLine,
            desc:"Parellel Lines",
            clickFn:"line-parallel"
        },
        {
            icon:PerpendicularLines,
            desc:"Perpendicular Lines",
            clickFn:"line-perpendicular"
        },
    ],
    [
        {
            icon:Vector2Points,
            desc:"Vector 2 Points",
            clickFn:"vector-2pts"
        },{
            icon:ParallelVector,
            desc:"Parallel Vector",
            clickFn:"vector-parallel"
        },{
            icon:PerpendicularVector,
            desc:"Perpendicular Vector",
            clickFn:"vector-perpendicular"
        }
    ],
    [
        {
            icon:Circle2Points,
            desc:"Circle 2 Points",
            clickFn:"circle-2pts"
        },
        { 
            icon:Circle3Points,
            desc:"Circle 3 Points",
            clickFn:"circle-3pts"
        },
        {
            icon:CircleDiameter,
            desc:"Circle from Diameter",
            clickFn:"circle-diameter"
        },
        {
            icon:CircleCenterRadius,
            desc:"Circle Center Radius",
            clickFn:"circle-center-radius"
        },
        {
            icon:OsculatingCircle,
            desc:"Osculating Circle",
            clickFn:"osculating-circle"
        },
        {
            icon:Arc3Points,
            desc:"Arc 3 Points",
            clickFn:"arc-3pts"
        },
        {
            icon:ArcCenter2Points,
            desc:"Arc Center 3 Points",
            clickFn:"arc-center-2pts"
        }
    
    ],
    [
        {
            icon:InsertShapeInfo,
            desc:"Insert Shape Info",
            clickFn:"measure-info"
        },
        // {
        //     icon:Image2Points,
        //     desc:"Image from 2 Points",
        //     clickFn:""
        // },
        // {
        //     icon:Image4Points,
        //     desc:"Image from 4 Points",
        //     clickFn:""
        // },
        {
            icon:Text2Point,
            desc:"Text from 2 Point",
            clickFn:"text-2pts"
        },
        {
            icon:MeasureAngle,
            desc:"Measure Angle",
            clickFn:"measure-angle"
        },
        {
            icon:MeasureLength,
            desc:"Measure Length",
            clickFn:"measure-length"
        },
        {
            icon:MeasurePoint,
            desc:"Measure Point",
            clickFn:"measure-point"
        },
        {
            icon:EvaluateExpression,
            desc:"Evaluate Expression",
            clickFn:"measure-expr"
        },
        {
            icon:Ruler2Points,
            desc:"Ruler from 2 Points",
            clickFn:"measure-ruler"
        },
        {
            icon:Protractor3Points,
            desc:"Protractor from 3 Points",
            clickFn:"measure-protractor"
        }
    
    ],
    [
        {
            icon:WhiteLight,
            desc:"Ray/White Light",
            clickFn:"optics-white-ray"
        },
        {
            icon:ParallelBeam,
            desc:"Parallel Beam",
            clickFn:"optics-beam"
        },
        {
            icon:PointSource,
            desc:"Point Source",
            clickFn:"optics-src"
        }
    ],
    [
        {
            icon:PlaneMirror,
            desc:"Plane Mirror",
            clickFn:"optics-planemirror"
        },
        {
            icon:IdealMirror,
            desc:"Ideal Concave/Convex Mirror",
            clickFn:"optics-idealmirror"
        },
        {
            icon:IdealLens,
            desc:"Ideal Concave/Convex Lens",
            clickFn:"optics-lens"
        }
    ],
    [
        {
            icon:PlaneSurface,
            desc:"Plane Surface",
            clickFn:"optics-plane"
        },
        {
            icon:ArcMirror,
            desc:"Mirror from Arc",
            clickFn:"optics-arcmirror"
        },
        {
            icon:ArbitaryRefSurface,
            desc:"Arbitary Refracting Surface",
            clickFn:"PathNpoints"
        }
    ],
    [
        {
            icon:RayBlocker,
            desc:"Ray Blocker",
            clickFn:"optics-blocker"
        },
        {
            icon:Observer,
            desc:"Observer",
            clickFn:"optics-observer"
        }
    ]

]