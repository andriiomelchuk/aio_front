import { lazy } from "react";
import { Route, Navigate, Routes, useLocation } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";


const HomePage = lazy(() => import("pages/HomePage"));
const GitPopularPage = lazy(() => import("pages/GitPopularPage"));
const GitBattlePage = lazy(() => import("pages/GitBattlePage"));
const MoviePage = lazy(() => import("pages/MoviePage"));
const ButtleResultPage = lazy(() => import("pages/GitBattlePage/BattleResultPage"));


const PublicRoutes: React.FC = () => {
    const location = useLocation();

    const isMatch = checkPathMatch(location.pathname, paths)

    return (
        <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.gitPopular} element={<GitPopularPage />} />
            <Route path={paths.gitBattle} element={<GitBattlePage />} />
            <Route path={paths.battleResult} element={<ButtleResultPage />} />
            <Route path={paths.movie} element={<MoviePage />} />
            <Route path='*' element={!isMatch ? <Navigate to={paths.home} /> : null} />
        </Routes>
    )
}

export default PublicRoutes;