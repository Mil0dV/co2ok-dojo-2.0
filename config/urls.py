from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from django.views import defaults as default_views
from django.conf.urls import url
from django.conf import settings
from django.views.generic import TemplateView
from django.contrib.auth.views import logout
from accounts import views
from dashboard import views as dashView
from ninja_profile import views as ninjaView
from .router import router

urlpatterns = [
    path("", TemplateView.as_view(template_name="pages/home.html"), name="home"),
    path(
        "about/",
        TemplateView.as_view(template_name="pages/about.html"),
        name="about",
    ),
    #api router
    path('', include(router.urls)),
    #acounts urls 
    path("login/", views.signin, name="login"),
    path("signup/", views.signup, name="signup"),
    path("check_inviter_id/", views.check_inviter_id, name="checkInviterId"),
    path("logout/", views.signout, name="logout"), 
    path('invitation_signup/', views.invitation_signup, name='invitation_signup'),
    path('password_recover_mail/', views.password_recover_mail, name='password_recover_mail'),
    # url(r'^logout/$', logout, {'next_page': settings.LOGOUT_REDIRECT_URL}, name='logout'),
    path("accounts/", include("accounts.urls", namespace="accounts")),
    path("dashboard/", include("dashboard.urls", namespace="dashboard")),
    path("blog/", include("blog.urls", namespace="blog")),
    path("ninja/", include("ninja_profile.urls", namespace="ninja")),
    path("merchantIdChecker/", dashView.merchantIdChecker, name="merchantIdChecker"),
    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
    # User management
    # path(
    #     "users/",
    #     include("co2ok_dojo.users.urls", namespace="users"),
    # ),
    # path("accounts/", include("allauth.urls")),
    # Your stuff: custom urls includes go here
    
    # webpack loader config
    # path("",
    #     TemplateView.as_view(template_name="application.html"),
    #     name="app",
    # ),

] + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        path(
            "400/",
            default_views.bad_request,
            kwargs={"exception": Exception("Bad Request!")},
        ),
        path(
            "403/",
            default_views.permission_denied,
            kwargs={"exception": Exception("Permission Denied")},
        ),
        path(
            "404/",
            default_views.page_not_found,
            kwargs={"exception": Exception("Page not Found")},
        ),
        path("500/", default_views.server_error),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
