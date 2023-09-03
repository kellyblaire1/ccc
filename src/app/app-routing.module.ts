import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './shared/guards/guest.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuestGuard], loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  { path: 'dashboard',canActivate: [GuestGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'nfts', loadChildren: () => import('./nfts/nfts.module').then(m => m.NftsModule) },
  { path: 'addressbook', loadChildren: () => import('./addressbook/addressbook.module').then(m => m.AddressbookModule) },
  { path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule) },
  { path: 'pro', loadChildren: () => import('./pro/pro.module').then(m => m.ProModule) },
  { path: 'tools', loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule) },
  { path: 'ecosystem', loadChildren: () => import('./ecosystem/ecosystem.module').then(m => m.EcosystemModule) },
  { path: 'aptos', loadChildren: () => import('./aptos/aptos.module').then(m => m.AptosModule) },
  { path: 'more', loadChildren: () => import('./more/more.module').then(m => m.MoreModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'register',canActivate: [GuestGuard], loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'login',canActivate: [GuestGuard], loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {
    path: 'profile',
    canActivate: [AuthGuard], loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'platform',
    canActivate: [AuthGuard], loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule)
  },
  { path: 'admin',canActivate: [AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'forgot', loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'create-blog', loadChildren: () => import('./create-blog/create-blog.module').then(m => m.CreateBlogModule) },
  { path: 'admin/blogs', loadChildren: () => import('./admin/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'blog/:slug', loadChildren: () => import('./blog-info/blog-info.module').then(m => m.BlogInfoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
