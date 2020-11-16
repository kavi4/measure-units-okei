import AreaCoefficients from './src/area/coefficients'
import AreaUnis from './src/area/units'

import LengthCoefficients from './src/length/coefficients'
import LengthUnits from './src/length/units'

import MassCoefficients from './src/mass/coefficients'
import MassUnits from './src/mass/units'

import TimeCoefficients from './src/time/coefficients'
import TimeUnits from './src/time/units'

import VolumeCoefficients from './src/volume/coefficients'
import VolumeUnits from './src/volume/units'

export const Area = {
    coefficients: AreaCoefficients,
    units: AreaUnis
}

export const Length = {
    coefficients: LengthCoefficients,
    unis: LengthUnits,
}

export const Mass = {
    coefficients: MassCoefficients,
    units: MassUnits,
}

export const Time = {
    coefficients: TimeCoefficients,
    units: TimeUnits,
}

export const Volume = {
    coefficients: VolumeCoefficients,
    units: VolumeUnits
}
