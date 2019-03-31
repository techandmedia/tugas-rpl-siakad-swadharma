INSERT INTO `t1` (`id`, `ts`, `dt`) VALUES (NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- update tabel t1 untuk field name
-- semua kolom dengan parameter on update akan terupdate
-- contoh kolom modified date akan terupdate secara otomatis
-- walaupun kolom modified date tidak termasuk di dalam query update
-- contoh berikut hanya melakukan update untuk kolom nama
UPDATE `t1` SET name="Eko Andri S" WHERE id=0