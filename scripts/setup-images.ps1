# Create product image directory structure and download placeholder images
$categories = @('mens', 'womens', 'kids')
$types = @('shoes', 'apparel')

foreach ($category in $categories) {
    foreach ($type in $types) {
        $path = "public/images/products/$category/$type"
        New-Item -Path $path -ItemType Directory -Force
        
        # Using picsum.photos for placeholder images
        1..5 | ForEach-Object {
            $url = "https://picsum.photos/600/600?random=$($category)$($type)$_"
            $outFile = Join-Path $path "product-$_.jpg"
            Invoke-WebRequest -Uri $url -OutFile $outFile
            Start-Sleep -Milliseconds 100  # Add small delay between requests
        }
    }
}
