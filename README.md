# Build Arch Linux package Github Action

```yaml
jobs:
  my-job:
    ...
    container:
      image: archlinux
      options: --privileged
      volumes:
        - /sys/fs/cgroup:/sys/fs/cgroup
    steps:
      ...
      - name: Build Arch Linux package
        uses: FFY00/build-arch-package@master
        with:
          PKGBUILD: path/to/my/PKGBUILD
      ...
```

`%COMMIT%` in the PKGBUILD will be replaced by the commit that triggered the action.

See [.github/workflows/test](.github/workflows/test) for an working example.

### Arguments

Key        | Description                                 | Required | Default Value
---------- | ------------------------------------------- |:--------:| -------------
`PKGBUILD` | PKGBUILD path                               | **Yes**  |
`OUTDIR`   | Output directory to store the built package | No       | `$HOME/arch-packages`

###### You can use environment variable names in the options, they will be resolved.
