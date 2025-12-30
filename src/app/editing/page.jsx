

import Header from '../../components/site/Header';
import Footer from '../../components/site/Footer';

import EditingHero from '../../components/editing/EditingHero';
import EditingServicesGrid from '../../components/editing/EditingServicesGrid';
import EditingProcess from '../../components/editing/EditingProcess';
import EditingPackages from '../../components/editing/EditingPackages';
import EditingDeliverables from '../../components/editing/EditingDeliverables';
import EditingBeforeAfter from '../../components/editing/EditingBeforeAfter';
import EditingFAQ from '../../components/editing/EditingFAQ';
import EditingFinalCTA from '../../components/editing/EditingFinalCTA';

export default function EditingPage() {
  return (
    <>
     
      <EditingHero />
      <EditingServicesGrid />
      <EditingProcess />
      <EditingPackages />
      <EditingDeliverables />
      <EditingBeforeAfter />
      <EditingFAQ />
      <EditingFinalCTA />
   
    </>
  );
}
