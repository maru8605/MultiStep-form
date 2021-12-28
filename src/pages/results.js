import React from 'react';
import styled from 'styled-components';
import { Loading } from '../component/loading';
import { Page } from '../component/page';
import { Typography } from '@mui/material';
import NumeroVisitasChart from '../component/charts/NumeroVisitasChar';
import CalidadInstalacionesChar from '../component/charts/CalidadInstalacionesChar';
import SatisfaccionServicioChar from '../component/charts/SatisfaccionServicioChar';
import ActitudPersonalChar from '../component/charts/ActitudPersonalChar';
import CalidadInformacionChar from '../component/charts/CalidadInformacionChar';
import TiempoInsumidoChar from '../component/charts/TiempoInsumidoChar';
import AtencionAdultosChar from '../component/charts/AtencionAdultosChar';
import AtencionNinosChar from '../component/charts/AtencionNinosChar';
import NumVisitas0800Char from '../component/charts/NumVisitas0800Char';
import NumRelatosChar from '../component/charts/NumRelatosChar';
import RelatosOpinionChar from '../component/charts/RelatosOpinionChar';
import VisitaMesaEntradaChar from '../component/charts/VisitaMesaEntradaChar';
import SatisfTiempo0800Char from '../component/charts/SatisfTiempo0800Char';
import SatisfAtencionMesaChar from '../component/charts/SatisfAtencionMesaChar';
import SatisfTiempoMesaChar from '../component/charts/SatisfTiempoMesaChar';
import SatisfAtencion0800Char from '../component/charts/SatisfAtencion0800Char';
import NVisitasAsistenciaChar from '../component/charts/NVisitasAsistenciaChar';
import SatisfAsistenciaChar from '../component/charts/SatisfAsistenciaChar';
import SatAsistenciaTiempoChar from '../component/charts/SatAsistenciaTiempoChar';
import NVisitasTrataChar from '../component/charts/NVisitasTrataChar';
import SatAtencionTrataChar from '../component/charts/SatAtencionTrataChar';
import SatTiempoTrataChar from '../component/charts/SatTiempoTrataChar';
import NVisitasDelitosexChar from '../component/charts/NVisitasDelitoSexChar';
import SatAtencionDelitoSexChar from '../component/charts/SatAtencionDelitoSexChar';
import SatTiempoDelitoSexChar from '../component/charts/SatTiempoDelitoSexChar';
import NVisitasBecasChar from '../component/charts/NVisitasBecasChar';
import SatAtencionBecasChar from '../component/charts/SatAtencionBecasChar';
import SatTiempoBecasChar from '../component/charts/SatTiempoBecasChar';
import NVisitasConstatacionesChar from '../component/charts/NVisitasConstatacionesChar';
import SatAtencionConstatacionesChar from '../component/charts/SatAtencionConstatacionesChar';
import SatTiempoConstatacionesChar from '../component/charts/SatTiempoConstatacionesChar';
import NVisitasRefugioChar from '../component/charts/NVisitasRefugioChar';
import SatAtencionRefugioChar from '../component/charts/SatAtencionRefugioChar';
import SatTiempoRefugioChar from '../component/charts/SatTiempoRefugioChar';
import NVisitasBrigadaChar from '../component/charts/NVisitasBrigadaChar';
import SatAtencionBrigadaChar from '../component/charts/SatAtencionBrigadaChar';
import SatTiempoBrigadaChar from '../component/charts/SatTiempoBrigadaChar';
import NVisitasMujerMigChar from '../component/charts/NVisitasMujerMigChar';
import SatAtencionMujerMigChar from '../component/charts/SatAtencionMujerMigChar';
import SatTiempoMujerMigChar from '../component/charts/SatAtencionMujerMigChar';
import NVisitasEscGeneroChar from '../component/charts/NVisitasEscGeneroChar';
import SatAtencionEscGeneroChar from '../component/charts/SatAtencionEscGeneroChar';
import SatTiempoEscGeneroChar from '../component/charts/SatTiempoEscGeneroChar';
import NVisitasCentroSaludChar from '../component/charts/NVisitasCentroSaludChar';
import SatAtencionCentroSaludChar from '../component/charts/SatAtencionCentroSaludChar';
import SatTiempoCentroSaludChar from '../component/charts/SatTiempoCentroSaludChar';
import NVisitasSalaCunaChar from '../component/charts/NVisitasSalaCunaChar';
import SatAtencionSalaCunaChar from '../component/charts/SatAtencionSalaCunaChar';
import SatTiempoSalaCunaChar from '../component/charts/SatTiempoSalaCunaChar';
import NVisitasBtnAntipanicChart from '../component/charts/NVisitasBtnAntipanicChart';
import SatAtencionBtnAntipanico from '../component/charts/SatAtencionBtnAntipanico';
import SatTiempoBtnAntipanico from '../component/charts/SatTiempoBtnAntipanico';
import NVisitasUJDelitoSexChar from '../component/charts/NVisitasDelitoSexChar';
import SatAtencionUJDelitoSexChar from '../component/charts/SatAtencionUJDelitoSexChar';
import SatTiempoUJDelitoSexualChar from '../component/charts/SatTiempoUJDelitoSexualChar';
import NVisitasUJViolenciaFamiliarChar from '../component/charts/NVisitasUJViolenciaFamiliarChar';
import SatAtencionUJViolenciaFamChar from '../component/charts/SatAtencionUJViolenciaFamChar';
import SatTiempoUJViolenciaFamiliarChar from '../component/charts/SatTiempoUJViolenciaFamiliarChar';
import NVisitasUJViolenciaGeneroChar from '../component/charts/NVisitasUJViolenciaGeneroChar';
import SatAtencionViolenciaGeneroChar from '../component/charts/SatAtencionViolenciaGeneroChar';
import SatTiempoUJViolenciaGeneroChar from '../component/charts/SatTiempoUJViolenciaGeneroChar';
import NVisitasEqMedicosChar from '../component/charts/NVisitasEqMedicosChar';
import SatAtencionEqMedicosChar from '../component/charts/SatAtencionEqMedicosChar';
import SatTiempoUJEqMedicosChar from '../component/charts/SatTiempoUJEqMedicosChar';
import NVisitasValPsicoChar from '../component/charts/NVisitasValPsicoChar';
import SatAtencionValPsicoChar from '../component/charts/SatAtencionValPsicoChar';
import SatTiempoValPsicoChar from '../component/charts/SatTiempoValPsicoChar';
import NumRelatosNuevosChar from '../component/charts/NumRelatosNuevosChar';

const MyTypography = styled(Typography)({
  paddingLeft: '30px',
});
const TopTypography = styled(Typography)({
  paddingTop: '30px',
  paddingLeft: '30px',
});

export const Results = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <TopTypography variant="h4">Frecuencia</TopTypography>
      <Page>
        <NumeroVisitasChart />
      </Page>
      <MyTypography variant="h4">
        Satisfacción general de los servicios (último año)
      </MyTypography>
      <Page>
        <CalidadInstalacionesChar />
        <SatisfaccionServicioChar />
        <ActitudPersonalChar />
        <CalidadInformacionChar />
        <TiempoInsumidoChar />
        <AtencionAdultosChar />
        <AtencionNinosChar />
      </Page>
      <MyTypography variant="h4">
        Nivel de satisfacción por área visitada
      </MyTypography>
      <Page>
        <NumVisitas0800Char />
        <SatisfAtencion0800Char />
        <SatisfTiempo0800Char />
        <VisitaMesaEntradaChar />
        <SatisfAtencionMesaChar />
        <SatisfTiempoMesaChar />
        <NVisitasAsistenciaChar />
        <SatisfAsistenciaChar />
        <SatAsistenciaTiempoChar />
        <NVisitasTrataChar />
        <SatAtencionTrataChar />
        <SatTiempoTrataChar />
        <NVisitasDelitosexChar />
        <SatAtencionDelitoSexChar />
        <SatTiempoDelitoSexChar />
        <NVisitasBecasChar />
        <SatAtencionBecasChar />
        <SatTiempoBecasChar />
        <NVisitasConstatacionesChar />
        <SatAtencionConstatacionesChar />
        <SatTiempoConstatacionesChar />
        <NVisitasRefugioChar />
        <SatAtencionRefugioChar />
        <SatTiempoRefugioChar />
        <NVisitasBrigadaChar />
        <SatAtencionBrigadaChar />
        <SatTiempoBrigadaChar />
        <NVisitasMujerMigChar />
        <SatAtencionMujerMigChar />
        <SatTiempoMujerMigChar />
        <NVisitasEscGeneroChar />
        <SatAtencionEscGeneroChar />
        <SatTiempoEscGeneroChar />
        <NVisitasCentroSaludChar />
        <SatAtencionCentroSaludChar />
        <SatTiempoCentroSaludChar />
        <NVisitasSalaCunaChar />
        <SatAtencionSalaCunaChar />
        <SatTiempoSalaCunaChar />
        <NVisitasBtnAntipanicChart />
        <SatAtencionBtnAntipanico />
        <SatTiempoBtnAntipanico />
        <Typography variant="h4">UNIDAD JUDICIAL</Typography>
        <NVisitasUJDelitoSexChar />
        <SatAtencionUJDelitoSexChar />
        <SatTiempoUJDelitoSexualChar />
        <NVisitasUJViolenciaFamiliarChar />
        <SatAtencionUJViolenciaFamChar />
        <SatTiempoUJViolenciaFamiliarChar />
        <NVisitasUJViolenciaGeneroChar />
        <SatAtencionViolenciaGeneroChar />
        <SatTiempoUJViolenciaGeneroChar />
        <NVisitasEqMedicosChar />
        <SatAtencionEqMedicosChar />
        <SatTiempoUJEqMedicosChar />
        <NVisitasValPsicoChar />
        <SatAtencionValPsicoChar />
        <SatTiempoValPsicoChar />
      </Page>
      <MyTypography variant="h4">
        ¿Ha tenido que relatar más de una vez lo ocurrido?
      </MyTypography>
      <Page>
        <NumRelatosChar />
        <NumRelatosNuevosChar />
        <RelatosOpinionChar />
      </Page>
    </React.Suspense>
  );
};
