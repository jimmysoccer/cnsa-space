import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import { NavBarItemsObj } from './constants/navConstants';
import MissionDetail from './pages/MissionDetail';
import Missions from './pages/Missions';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={NavBarItemsObj.team.path} element={<Team />} />
            <Route
              path={NavBarItemsObj.technology.path}
              element={<Technology />}
            />
            <Route path={NavBarItemsObj.contact.path} element={<Contact />} />
            <Route path={NavBarItemsObj.missions.path} element={<Missions />} />
            <Route
              path={`${NavBarItemsObj.missions.path}/:missionId`}
              element={<MissionDetail />}
            />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
