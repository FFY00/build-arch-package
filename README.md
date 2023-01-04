# Build Arch Linux package Github Action

```yaml
jobs:
  my-job:
    ...
    container:
      image: archlinux
      options: --privileged
    steps:
      ...
      - name: Build Arch Linux package
        uses: FFY00/build-arch-package@v1
        with:
          PKGBUILD: path/to/my/PKGBUILD
      ...
```

`%COMMIT%` in the PKGBUILD will be replaced by the commit that triggered the action.

See [.github/workflows/test.yml](.github/workflows/test.yml) for a working example.

### Arguments

Key            | Description                                 | Required | Default Value
-------------- | ------------------------------------------- |:--------:| -------------
`PKGBUILD`     | PKGBUILD path                               | **Yes**  |
`BUILD_SCRIPT` | Pacman configuration file used              | No       | `extra-x86_64-build`
`OUTDIR`       | Output directory to store the built package | No       | `$HOME/arch-packages`


See：[DeveloperWiki:Building_in_a_clean_chroot](https://wiki.archlinux.org/index.php/DeveloperWiki:Building_in_a_clean_chroot)

Target repository         | Architecture | Build script to use    | Pacman configuration file used
-------------------------:|-------------:|-----------------------:|-------------------------------
extra/community           | x86_64       | extra-x86_64-build     | /usr/share/devtools/pacman-extra.conf
testing/community-testing | x86_64       | testing-x86_64-build   | /usr/share/devtools/pacman-testing.conf
staging/community-staging | x86_64       | staging-x86_64-build   | /usr/share/devtools/pacman-staging.conf
multilib                  | x86_64       | multilib-build         | /usr/share/devtools/pacman-multilib.conf
multilib-testing          | x86_64       | multilib-testing-build | /usr/share/devtools/pacman-multilib-testing.conf
multilib-staging          | x86_64       | multilib-staging-build | /usr/share/devtools/pacman-multilib-staging.conf

###### You can use environment variable names in the options, they will be resolved.
