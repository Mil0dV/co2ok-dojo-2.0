## Info
```
For information on how to run and test frontend related changes, go to https://github.com/CO2ok/co2ok-dojo-2.0/tree/master/frontend
(in this repo in /frontend)
```

# Add githooks:
`./add-git-hook.sh`

# co2ok-dojo-2.0

1. pipenv install
1. pipenv shell
1. .env aan maken
1. in de .env file de keys doen (om vragen)
1. `python manage.py migrate && python manage.py runserver`

Tests runnen:
`pytest`

Syntax checken:
`flake8`
