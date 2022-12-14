import PointIcon from '../../assets/Optics/xoptics-surface.svg'
import ReflectionIcon from '../../assets/Optics/xoptics-surface.svg'
import ProjectionIcon from '../../assets/Optics/xoptics-surface.svg'
import DividePoint from '../../assets/Optics/xoptics-surface.svg'
import PointCordinate from '../../assets/Optics/xoptics-surface.svg'
import Line2Point from '../../assets/Optics/xoptics-surface.svg'
import Segment2Point from '../../assets/Optics/xoptics-surface.svg'
import Ray2Point from '../../assets/Optics/xoptics-surface.svg'
import ParallelLine from '../../assets/Optics/xoptics-surface.svg'
import PerpendicularLines from '../../assets/Optics/xoptics-surface.svg'
import Vector2Points from '../../assets/Optics/xoptics-surface.svg'
import ParallelVector from '../../assets/Optics/xoptics-surface.svg'
import PerpendicularVector from '../../assets/Optics/xoptics-surface.svg'
import Circle2Points from '../../assets/Optics/xoptics-surface.svg'
import Circle3Points from '../../assets/Optics/xoptics-surface.svg'
import CircleDiameter from '../../assets/Optics/xoptics-surface.svg'
import CircleCenterRadius from '../../assets/Optics/xoptics-surface.svg'
import OsculatingCircle from '../../assets/Optics/xoptics-surface.svg'
import Arc3Points from '../../assets/Optics/xoptics-surface.svg'
import ArcCenter2Points from '../../assets/Optics/xoptics-surface.svg'
import InsertShapeInfo from '../../assets/Optics/xoptics-surface.svg'
import Image2Points from '../../assets/Optics/xoptics-surface.svg'
import Image4Points from '../../assets/Optics/xoptics-surface.svg'
import Text2Point from '../../assets/Optics/xoptics-surface.svg'
import MeasureAngle from '../../assets/Optics/xoptics-surface.svg'
import MeasureLength from '../../assets/Optics/xoptics-surface.svg'
import MeasurePoint from '../../assets/Optics/xoptics-surface.svg'
import EvaluateExpression from '../../assets/Optics/xoptics-surface.svg'
import Ruler2Points from '../../assets/Optics/xoptics-surface.svg'
import Protractor3Points from '../../assets/Optics/xoptics-surface.svg'
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
            desc:"Free Point"
        },
        {
            icon:ReflectionIcon,
            desc:"Reflection of Point about Line"
        },
        {
            icon:ProjectionIcon,
            desc:"Projection Point"
        },
        {
            icon:DividePoint,
            desc:"Divide Point in K:1 "
        },
        {
            icon:PointCordinate,
            desc:"Point from Coordinates"
        },
    ],
    [
        {
            icon:Line2Point,
            desc:"Line 2 Points"
        },
        {
            icon:Segment2Point,
            desc:"Segment 2 Points"
        },
        {
            icon:Ray2Point,
            desc:"Ray 2 Points"
        },
        {
            icon:ParallelLine,
            desc:"Parellel Lines"
        },
        {
            icon:PerpendicularLines,
            desc:"Perpendicular Lines"
        },
    ],
    [
        {
            icon:Vector2Points,
            desc:"Vector 2 Points"
        },{
            icon:ParallelVector,
            desc:"Parallel Vector"
        },{
            icon:PerpendicularVector,
            desc:"Perpendicular Vector"
        }
    ],
    [
        {
            icon:Circle2Points,
            desc:"Circle 2 Points"
        },
        { 
            icon:Circle3Points,
            desc:"Circle 3 Points"
        },
        {
            icon:CircleDiameter,
            desc:"Circle from Diameter"
        },
        {
            icon:CircleCenterRadius,
            desc:"Circle Center Radius"
        },
        {
            icon:OsculatingCircle,
            desc:"Osculating Circle"
        },
        {
            icon:Arc3Points,
            desc:"Arc 3 Points"
        },
        {
            icon:ArcCenter2Points,
            desc:"Arc Center 3 Points"
        }
    
    ],
    [
        {
            icon:InsertShapeInfo,
            desc:"Insert Shape Info"
        },
        {
            icon:Image2Points,
            desc:"Image from 2 Points"
        },
        {
            icon:Image4Points,
            desc:"Image from 4 Points"
        },
        {
            icon:Text2Point,
            desc:"Text from 2 Point"
        },
        {
            icon:MeasureAngle,
            desc:"Measure Angle"
        },
        {
            icon:MeasureLength,
            desc:"Measure Length"
        },
        {
            icon:MeasurePoint,
            desc:"Measure Point"
        },
        {
            icon:EvaluateExpression,
            desc:"Evaluate Expression"
        },
        {
            icon:Ruler2Points,
            desc:"Ruler from 2 Points"
        },
        {
            icon:Protractor3Points,
            desc:"Protractor from 3 Points"
        }
    
    ],
    [
        {
            icon:WhiteLight,
            desc:"Ray/White Light"
        },
        {
            icon:ParallelBeam,
            desc:"Parallel Beam"
        },
        {
            icon:PointSource,
            desc:"Point Source"
        }
    ],
    [
        {
            icon:PlaneMirror,
            desc:"Plane Mirror"
        },
        {
            icon:IdealMirror,
            desc:"Ideal Concave/Convex Mirror"
        },
        {
            icon:IdealLens,
            desc:"Ideal Concave/Convex Lens"
        }
    ],
    [
        {
            icon:PlaneSurface,
            desc:"Plane Surface"
        },
        {
            icon:ArcMirror,
            desc:"Mirror from Arc"
        },
        {
            icon:ArbitaryRefSurface,
            desc:"Arbitary Refracting Surface"
        }
    ],
    [
        {
            icon:RayBlocker,
            desc:"Ray Blocker"
        },
        {
            icon:Observer,
            desc:"Observer"
        }
    ]

]